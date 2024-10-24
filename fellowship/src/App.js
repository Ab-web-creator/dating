import { Routes, Route } from 'react-router-dom'
import './App.css'
import PersistLogin from './config/PersistLogin'
import RequireAuth from './config/RequireAuth'

import PublicPage from './publicPages/PublicPage'
import Signup from './publicPages/Signup'

import Layout from './feature/Layout'
import ProfileEdit from './feature/profilePage/ProfileEdit'


import ProfilePage from './feature/profilePage/ProfilePage'
import SearchPage from './feature/searchPage/SearchPage'
import DiscussionsPage from './feature/discussions/DiscussionsPage'
import Videochats from './feature/videochats/Videochats'
import LastProfilesPage from './feature/lastProfiles/LastProfilesPage'

import PremiumPage from './feature/premium/PremiumPage'
import Messages from './feature/messages/Messages'
import TravelersPage from './feature/travelers/TravelersPage'
 
import Bookmarks from './feature/bookmarks/Bookmarks'
import Notifications from './feature/notifications/Notifications'
import ChatShablon from './feature/videochats/components/ChatShablon'
import VideoGroupChat from './feature/videochats/components/VideoGroupChat'
 
import ProfileMultiStepForm from './feature/multistepForm/ProfileMultiStepForm'


function App() {
  return (
    <div className="App">
 
      <Routes>
        {/* all public users/viewers */}
        <Route element={<PublicPage />} path='/' />

        <Route element={<Signup />} path='/signup/:id' />
        {/* <Route element={<Login />} path='/login /> */}
        <Route element={<PersistLogin />} >
          <Route element={<RequireAuth allowedRoles={[1111, 2222, 4444, 5555, 6666, 7777]} />}>

            <Route element={<ChatShablon />} path='/chat-room' />
            <Route element={<VideoGroupChat />} path='/group-video-chat' />
            <Route element={<Layout />}> 
              <Route element={<SearchPage />} path='/search-page' />
              <Route element={<DiscussionsPage />} path='/discussions' />
              <Route element={<Videochats />} path='/videochats' />
              <Route element={<LastProfilesPage />} path='/lastProfiles' />
              <Route element={<PremiumPage />} path='/premium-page' />
              <Route element={<Messages />} path='/messages' />
              <Route element={<TravelersPage />} path='/travelers' />
              <Route element={<Bookmarks />} path='/bookmarks' />
              <Route element={<Notifications />} path='/notifications' />
              <Route element={<ProfilePage />} path='/profile-page/:id' />
              <Route element={<ProfileMultiStepForm />} path='/profile-page/:id/register' />
              <Route element={<ProfileEdit />} path='/profile-page/:id/edit' />
            </Route>
          </Route>
        </Route>
      </Routes>

    </div >
  );
}

export default App;
