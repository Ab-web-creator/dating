import axios from 'axios'
import useAuth from './useAuth'
import { useNavigate } from 'react-router-dom'

const useRefreshToken = () => {
  const { setAuth } = useAuth()
  const navigate = useNavigate()

  const refresh = async () => {

    try {

      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/refresh`,
        {
          withCredentials: true,
        }
      )

      setAuth((prev) => {
        return {
          ...prev,
          role: response.data.role,
          accessToken: response.data.accessToken,
          // username: response.data.username,
          userId: response.data.userId,
          email: response.data.email,
          nick: response.data.nick,
          searchName: response.data.searchName,
          birthDate: response.data.birthDate,
          createdAt: response.data.createdAt,
          signupCompletion: response.data.signupCompletion,
          image: response.data.image,
          backgroundImage: response.data.backgroundImage,
          biography: response.data.biography,
          boardMember: response.data.boardMember,
        }
      })
      return response.data.accessToken
    } catch (error) {

      if (error?.response?.status === 401 || error?.response?.status === 403) {
        setAuth({})
        navigate('/')
        throw error
      }
    }
  }
  return refresh
}

export default useRefreshToken
