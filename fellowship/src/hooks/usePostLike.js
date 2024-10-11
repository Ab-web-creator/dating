import { useMutation, useQueryClient } from "react-query"
import useAxiosPrivate from './useAxiosPrivate'
import useAuth from './useAuth'
import { useState } from 'react'

export const usePostLike = (queryKey, post) => {

  const axiosPrivate = useAxiosPrivate()
  const queryClient = useQueryClient()
  const { auth } = useAuth()

  const [isLiked, setLiked] = useState(post?.like?.referredUser === auth.userId)

  const likePost = async (userId, feedPost) => {
    try {
      const { data } = await axiosPrivate.post(`${process.env.REACT_APP_BACKEND_URL}/api/likes`, JSON.stringify({
        userId: userId,
        postId: feedPost._id,
      }))
      return data
    } catch (error) {
      console.log("likePost error", error)
    }
  }

  const unlikePost = async (post) => {
    try {
      await axiosPrivate.delete(`${process.env.REACT_APP_BACKEND_URL}/api/likes/${post.like._id}`)
    } catch (error) {
      console.log(error)
    }
  }
  // in backend form of post object {
  //   ...
  //   like: { _id: likeId, likeCount: likeCount}
  // }
  const likePostMutation = useMutation(
    () => likePost(auth.userId, post),
    {
      onSuccess: (data) => {
        queryClient.setQueryData(queryKey, (prev) => {
          // console.log("data on post mutation like", data);
          return {
            ...prev,
            pages: prev.pages.map((pageArray) =>
              pageArray.map((element) => {
                if (element._id === post._id) {

                  return {
                    ...element,
                    like: data.like,
                    likeCount: element.likeCount + 1,
                  };
                } else {
                  return element
                }
              })
            ),
          };
        });
      },
    }
  );

  const deleteLikePostMutation = useMutation(() => unlikePost(post),
    {
      onSuccess: () => {
        // console.log("data on delete mutation like");
        queryClient.setQueriesData(queryKey, (prev) => {
          return {
            ...prev,
            pages: prev.pages.map((pageArray) => pageArray.map(element => {
              if (element._id === post._id) {
                const updatedElement = { ...element, likeCount: element.likeCount - 1 }
                delete updatedElement.like
                return updatedElement
              }
              return element
            }))
          }
        })
      },
    },
  )

  const handleLike = async () => {
    try {
      if (!isLiked) {
        await likePostMutation.mutateAsync()
        setLiked(true)
      } else {
        await deleteLikePostMutation.mutateAsync()
        setLiked(false)
      }
    } catch (error) {
      console.log("handle like error", error)
    }
  }

  return { isLiked, handleLike }
}