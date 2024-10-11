import { Routes, Route } from 'react-router-dom'
import './App.css'
import PersistLogin from './config/PersistLogin'
import RequireAuth from './config/RequireAuth'

import PublicPage from './publicPages/PublicPage'
import Signup from './publicPages/Signup'

import Layout from './feature/Layout'
import ProfileEdit from './feature/profilePage/ProfileEdit'


import ProfilePage from './feature/profilePage/ProfilePage'
import WelcomePage from './feature/welcome/WelcomePage'
import BlogPage from './feature/blogPage/BlogPage'
import Communities from './feature/communities/Communities'
import Servants from './feature/servants/Servants'
import MyStudents from './feature/academy/MyStudents'
import MyTeachers from './feature/academy/MyTeachers'
import Messages from './feature/messages/Messages'
import Resources from './feature/resources/Resources'
 
import Bookmarks from './feature/bookmarks/Bookmarks'
import Notifications from './feature/notifications/Notifications'
import ChatShablon from './feature/communities/components/ChatShablon'
import VideoGroupChat from './feature/communities/components/VideoGroupChat'

import QisasLayout from './feature/uzbTavrotPlus/QisasLayout'
import QisasNavigation from './feature/uzbTavrotPlus/QisasNavigation'
import ConverterForQisas from './feature/uzbTavrotPlus/ConverterForQisas'
import Introduction from './feature/uzbTavrotPlus/Introduction'
import Adam from './feature/uzbTavrotPlus/Adam'
import CreatingWorld from './feature/uzbTavrotPlus/CreatingWorld'
import TheFall from './feature/uzbTavrotPlus/TheFall'
import KainAbel from './feature/uzbTavrotPlus/KainAbel'
import Noah from './feature/uzbTavrotPlus/Noah'
import NoahCovenant from './feature/uzbTavrotPlus/NoahCovenant'
import Abraham from './feature/uzbTavrotPlus/Abraham'
import AbrahamicCovenant from './feature/uzbTavrotPlus/AbrahamicCovenant'
import AbrahamicCovenantConfirmed from './feature/uzbTavrotPlus/AbrahamicCovenantConfirmed'
import MotherAgar from './feature/uzbTavrotPlus/MotherAgar'
import SignOfCovenant from './feature/uzbTavrotPlus/SignOfCovenant'
import SadomGamorra from './feature/uzbTavrotPlus/SadomGamorra'
import Ishmael from './feature/uzbTavrotPlus/Ishmael'
import ZabihAllah from './feature/uzbTavrotPlus/ZabihAllah'
import Isaak from './feature/uzbTavrotPlus/Isaak'
import IsaaksTwins from './feature/uzbTavrotPlus/IsaaksTwins'
import BarakaStolen from './feature/uzbTavrotPlus/BarakaStolen'
import Jacob from './feature/uzbTavrotPlus/Jacob'
import MarryingTwoWives from './feature/uzbTavrotPlus/MarryingTwoWives'
import ReturnToKanaan from './feature/uzbTavrotPlus/ReturnToKanaan'
import FightWithAngel from './feature/uzbTavrotPlus/FightWithAngel'
import Yusuf from './feature/uzbTavrotPlus/Yusuf'
import DreamsChapter from './feature/uzbTavrotPlus/DreamsChapter'
import MeetingBrothers from './feature/uzbTavrotPlus/MeetingBrothers'
import PharaohInvitesJacob from './feature/uzbTavrotPlus/PharaohInvitesJacob'
import JacobsProphecy from './feature/uzbTavrotPlus/JacobsProphecy'
import Musa from './feature/uzbTavrotPlus/Musa'
import WhoAmI from './feature/uzbTavrotPlus/WhoAmI'
import ThreeMiracles from './feature/uzbTavrotPlus/ThreeMiracles'
import EgyptPlagues from './feature/uzbTavrotPlus/EgyptPlagues'
import DeathOfFirstborn from './feature/uzbTavrotPlus/DeathOfFirstborn'
import DesertAdventures from './feature/uzbTavrotPlus/DesertAdventures'
import ShariahRevealed from './feature/uzbTavrotPlus/ShariahRevealed'
import ShariahLaws from './feature/uzbTavrotPlus/ShariahLaws'
import BaniIsraelAcceptedShariah from './feature/uzbTavrotPlus/BaniIsraelAcceptedShariah'
import MoreShariahLaws from './feature/uzbTavrotPlus/MoreShariahLaws'
import FourtyYearsInDesert from './feature/uzbTavrotPlus/FourtyYearsInDesert'
import MosesGoodWill from './feature/uzbTavrotPlus/MosesGoodWill'


import KevinLayout from './feature/kevinsCourse/KevinLayout'
import KevinNavigation from './feature/kevinsCourse/KevinNavigation'
import KevinLandingPage from './feature/kevinsCourse/KevinLandingPage'
import KevinsIntroduction from './feature/kevinsCourse/KevinsIntroduction'
import WisdomFromMoses from './feature/kevinsCourse/WisdomFromMoses'
import WisdomFromBhagavad from './feature/kevinsCourse/WisdomFromBhagavad'
import WisdomFromBuddha from './feature/kevinsCourse/WisdomFromBuddha'
import WisdomFromLaoTzu from './feature/kevinsCourse/WisdomFromLaoTzu'
import WisdomFromJesus from './feature/kevinsCourse/WisdomFromJesus'
import WisdomFromMuhammad from './feature/kevinsCourse/WisdomFromMuhammad'
import WisdomConclusion from './feature/kevinsCourse/WisdomConclusion'

import IctLayout from './feature/ictCourse/IctLayout'
import IctNavigation from './feature/ictCourse/IctNavigation'
import HtmLOne from './feature/ictCourse/HtmLOne'
import HtmLTwo from './feature/ictCourse/HtmLTwo'

import ProfileMultiStepForm from './feature/multistepForm/ProfileMultiStepForm'

import BookContentPage from './feature/dbPublishing/BookContentPage'
import BookCreator from './feature/dbPublishing/BookCreator'
import BookOverview from './feature/dbPublishing/BookOverview'
import BookEditor from './feature/dbPublishing/BookEditor'

 

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

              <Route element={<ConverterForQisas />} path='convert-qisas-texts' />
 
              <Route element={<WelcomePage />} path='/search-page' />
              <Route element={<BlogPage />} path='/blogPage' />
              <Route element={<Communities />} path='/communities' />
              <Route element={<Servants />} path='/servants' />
              <Route element={<MyStudents />} path='/my-students' />
              <Route element={<MyTeachers />} path='/my-teachers' />
              <Route element={<Messages />} path='/messages' />

              <Route element={<Resources />} path='/resources' />
              <Route element={<BookOverview />} path='/resources/book/overview/:id' />
              <Route element={<BookContentPage />} path='/resources/book/page/:id' />
              <Route element={<BookCreator />} path='/resources/book-upload' />
              <Route element={<BookEditor />} path='/resources/book-edit/:id' />

              <Route element={<Bookmarks />} path='/bookmarks' />
              <Route element={<Notifications />} path='/notifications' />
              <Route element={<ProfilePage />} path='/profile-page/:id' />
              <Route element={<ProfileMultiStepForm />} path='/profile-page/:id/register' />
              <Route element={<ProfileEdit />} path='/profile-page/:id/edit' />

              <Route element={<QisasLayout />} path='/qisas-uzbek' >
                <Route element={<QisasNavigation />} path='home-qisas' />

                <Route element={<Introduction />} path='introduction' />
                <Route element={<Adam />} path='adam' />
                <Route element={<CreatingWorld />} path='creation-of-world' />
                <Route element={<TheFall />} path='the-fall' />
                <Route element={<KainAbel />} path='kain-abel' />
                <Route element={<Noah />} path='noah' />
                <Route element={<NoahCovenant />} path='noah-covenant' />
                <Route element={<Abraham />} path='abrahamic-story' />
                <Route element={<AbrahamicCovenant />} path='abrahamic-covenant' />
                <Route element={<AbrahamicCovenantConfirmed />} path='covenant_confirmation' />
                <Route element={<MotherAgar />} path='mother-agar' />
                <Route element={<SignOfCovenant />} path='covenant-sign' />
                <Route element={<SadomGamorra />} path='sadom-gamorra' />
                <Route element={<Ishmael />} path='ishmael' />
                <Route element={<ZabihAllah />} path='zabihullah' />
                <Route element={<Isaak />} path='isaak' />
                <Route element={<IsaaksTwins />} path='isaaks-twins' />
                <Route element={<BarakaStolen />} path='jacob-steals-blessing' />
                <Route element={<Jacob />} path='jacob' />
                <Route element={<MarryingTwoWives />} path='marrying-two-daughters' />
                <Route element={<ReturnToKanaan />} path='return-to-kanaan' />
                <Route element={<FightWithAngel />} path='fight-with-angel' />
                <Route element={<Yusuf />} path='joseph' />
                <Route element={<DreamsChapter />} path='dreams-chapter' />
                <Route element={<MeetingBrothers />} path='meeting-with-brothers' />
                <Route element={<PharaohInvitesJacob />} path='pharaoh-invites-jacobs-family' />
                <Route element={<JacobsProphecy />} path='prophecy-of-jacob' />
                <Route element={<Musa />} path='musa' />
                <Route element={<WhoAmI />} path='who-am-I' />
                <Route element={<ThreeMiracles />} path='three-miracles-of-Moses' />
                <Route element={<EgyptPlagues />} path='Egypt-plagues' />
                <Route element={<DeathOfFirstborn />} path='death-of-firstborn' />
                <Route element={<DesertAdventures />} path='adventures-in-desert' />
                <Route element={<ShariahRevealed />} path='shariah_revealed' />
                <Route element={<ShariahLaws />} path='examples-of-shariah' />
                <Route element={<BaniIsraelAcceptedShariah />} path='bani-israel-accepted-shariah' />
                <Route element={<MoreShariahLaws />} path='more-shariah-laws' />
                <Route element={<FourtyYearsInDesert />} path='fourty-years-in-the-desert' />
                <Route element={<FourtyYearsInDesert />} path='fourty-years-in-the-desert' />
                <Route element={<MosesGoodWill />} path='wasiya-of-Moses' />
              </Route>

              <Route element={<KevinLayout />} path='/creativity-course-from-religious-heritages' >
                <Route element={<KevinLandingPage />} path='home-for-art' />
                <Route element={<KevinNavigation />} path='navigation-page' />
                <Route element={<KevinsIntroduction />} path='introduction-to-the-course' />
                <Route element={<WisdomFromMoses />} path='wisdom-from-moses' />
                <Route element={<WisdomFromBhagavad />} path='wisdom-from-bhagavad-gita' />
                <Route element={<WisdomFromBuddha />} path='wisdom-from-buddha' />
                <Route element={<WisdomFromLaoTzu />} path='wisdom-from-lao-tzu' />
                <Route element={<WisdomFromJesus />} path='wisdom-from-jesus' />
                <Route element={<WisdomFromMuhammad />} path='wisdom-from-muhammad-saw' />
                <Route element={<WisdomConclusion />} path='conclusion' />
              </Route>

              <Route element={<IctLayout />} path='/html-css-course' >
                <Route element={<IctNavigation />} path='home-for-html-css' />
                <Route element={<HtmLOne />} path='html-lesson-one' />
                <Route element={<HtmLTwo />} path='html-lesson-two' />
              </Route>


            </Route>


          </Route>
        </Route>
      </Routes>

    </div >
  );
}

export default App;
