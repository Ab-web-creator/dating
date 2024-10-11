import { useRef, useCallback } from 'react'
import { useInfiniteQuery } from 'react-query'
import useAxiosPrivate from './useAxiosPrivate'

export const useInfiniteScroll = (queryKey, requestUrl, sectionQuery = '') => {

  const axiosPrivate = useAxiosPrivate()
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    data,
    isFetching,
    refetch
  } = useInfiniteQuery(queryKey,
    async ({ pageParam = 1 }) => {
      const response = await axiosPrivate.get(`${requestUrl}?page=${pageParam}&section=${sectionQuery}`)
      return response.data
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length ? allPages.length + 1 : undefined;
      },
      refetchOnWindowFocus: false, // every time we focus on the window of the app, it fetches, this prevents it from doing so
      // staleTime: 10000000 // don't keep refetching all posts once user likes or bookmarks a post
    }
  )

  const intObserver = useRef()

  const lastPostRef = useCallback(post => {
    // if in the process of fetching, skip the rest
    if (isFetchingNextPage) return

    if (intObserver.current) intObserver.current.disconnect();

    // if got to the intersection, fetch the next stack of posts
    intObserver.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage()
      }
    });

    if (post) intObserver.current.observe(post)

  }, [isFetchingNextPage, fetchNextPage, hasNextPage])

  return { fetchNextPage, hasNextPage, isFetchingNextPage, data, isFetching, lastPostRef, refetch }
}
