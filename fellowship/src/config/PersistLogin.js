import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useRefreshToken from '../hooks/useRefreshToken'
import useAuth from '../hooks/useAuth'

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true)
  const refresh = useRefreshToken()
  const { auth, persist } = useAuth()

  useEffect(() => {
    let isMounted = true

    const verifyRefreshToken = async () => {
      try {
        await refresh()

      } catch (err) {
        console.error(err)
      } finally {
        isMounted && setIsLoading(false)
      }
    }

    !auth?.accessToken && persist ? verifyRefreshToken() : setIsLoading(false)

    return () => (isMounted = false)
  }, [])

  useEffect(() => {

  }, [isLoading])

  return (
    <>
      {!persist ? <Outlet /> : isLoading ? <div className='loading'>
        <div>
          <p>Loading the Page...</p>
        </div>
      </div> : <Outlet />}</>
  )
}

export default PersistLogin
