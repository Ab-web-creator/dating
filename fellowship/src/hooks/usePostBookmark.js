import { useMutation, useQueryClient } from "react-query"
import useAxiosPrivate from './useAxiosPrivate'
import useAuth from './useAuth'
import { useState } from 'react'

export const usePostBookmark = (queryKey, post) => {

  const axiosPrivate = useAxiosPrivate()
  const queryClient = useQueryClient()
  const { auth } = useAuth()

  const [isBookmarked, setBookmarked] = useState(post?.bookmark?.referredUser === auth.userId)

  const bookmarkPost = async (userId, feedPost) => {
    try {
      const { data } = await axiosPrivate.post(`${process.env.REACT_APP_BACKEND_URL}/api/bookmarks`, JSON.stringify({
        userId: userId,
        postId: feedPost._id,
      }))
      return data
    } catch (error) {
      console.log("bookmarkPost error", error)
    }
  }

  const unbookmarkPost = async (post) => {
    try {
      await axiosPrivate.delete(`${process.env.REACT_APP_BACKEND_URL}/api/bookmarks/${post.bookmark._id}`)
    } catch (error) {
      console.log(error)
    }
  }

  const bookmarkPostMutation = useMutation(() => bookmarkPost(auth.userId, post),
    {
      onSuccess: (data) => {

        queryClient.setQueryData(queryKey, (prev) => {
          return {
            ...prev,
            pages: prev.pages.map((pageArray) => pageArray.map(element =>
              element._id === post._id ? { ...element, bookmark: data.bookmark } : element
            ))
          }
        })
      },

      // onSettled: () => {
      //   if (queryKey === "bookmarkPosts") {
      //     queryClient.invalidateQueries(queryKey);
      //   }
      // }
    }
  )

  const deleteBookmarkPostMutation = useMutation(() => unbookmarkPost(post),
    {
      onSuccess: () => {
        queryClient.setQueriesData(queryKey, (prev) => {
          return {
            ...prev,
            pages: prev.pages.map((pageArray) => pageArray.map(element => {
              if (element._id === post._id) {
                const updatedElement = { ...element }
                delete updatedElement.bookmark
                return updatedElement
              }
              return element
            }))
          }
        })
      },
      // onSettled: () => {
      //   if (queryKey === "bookmarkPosts") {
      //     queryClient.invalidateQueries(queryKey)
      //   }
      // }
    },
  )


  const handleBookmark = async () => {
    try {
      if (!isBookmarked) {
        await bookmarkPostMutation.mutateAsync()
        setBookmarked(true)
      } else {
        await deleteBookmarkPostMutation.mutateAsync()
        setBookmarked(false)
      }
    } catch (error) {
      console.log("handleBookmark error", error)
    }
  }

  return { isBookmarked, handleBookmark }
}