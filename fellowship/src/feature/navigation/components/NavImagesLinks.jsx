 
import smallLogo from '../../../images/small_logo2.png';
import blog1 from '../../../images/blog1.png';
import blog2 from '../../../images/blog2.png';
import messages1 from '../../../images/email1.png';
import messages2 from '../../../images/email2.png';
import notification1 from '../../../images/notification1.png';
import notification2 from '../../../images/notification2.png';
import searchProfiles1 from '../../../images/searchProfiles1.png';
import searchProfiles2 from '../../../images/searchProfiles2.png';
import mystudents1 from '../../../images/premium1.png';
import mystudents2 from '../../../images/premium2.png';
import servants1 from '../../../images/community1.png';
import servants2 from '../../../images/community2.png';
import community1 from '../../../images/videochat1.png';
import community2 from '../../../images/videochat2.png';
import bookmark1 from '../../../images/bookmark1.png';
import bookmark2 from '../../../images/bookmark2.png';
import resources1 from '../../../images/traveler1.png';
import resources2 from '../../../images/traveler2.png';
import myProfile1 from '../../../images/myProfile1.png';
import myProfile2 from '../../../images/myProfile2.png';

const NavImages = {
  smallLogo,
  blog1,
  blog2,
  messages1,
  messages2,
  notification1,
  notification2,
  searchProfiles1,
  searchProfiles2,
  mystudents1,
  mystudents2,
  servants1,
  servants2,
  community1,
  community2,
  bookmark1,
  bookmark2,
  resources1,
  resources2,
  myProfile1,
  myProfile2,
};

const getNavLinks = (auth) => [
  {
    path: '/discussions',
    image1: NavImages.blog1,
    image2: NavImages.blog2,
    textKey: 'Nav.BlogPage',
  },
  {
    path: '/bookmarks',
    image1: NavImages.bookmark1,
    image2: NavImages.bookmark2,
    textKey: 'Nav.Bookmarks',
  },
  {
    path: '/messages',
    image1: NavImages.messages1,
    image2: NavImages.messages2,
    textKey: 'Nav.Messages',
  },
  {
    path: '/videochats',
    image1: NavImages.community1,
    image2: NavImages.community2,
    textKey: 'Nav.Communities',
  },
  {
    path: '/search-page',
    image1: NavImages.searchProfiles1,
    image2: NavImages.searchProfiles2,
    textKey: 'Nav.Search',
  },
  {
    path: '/travelers',
    image1: NavImages.resources1,
    image2: NavImages.resources2,
    textKey: 'Travelers Section',
  },
  {
    path: '/lastProfiles',
    image1: NavImages.servants1,
    image2: NavImages.servants2,
    textKey: 'Last Profiles',
  },
  {
    path: `/profile-page/${auth?.userId}`,
    image1: NavImages.myProfile1,
    image2: NavImages.myProfile2,
    textKey: 'Nav.Profile',
  },

  {
    path: '/premium-page',
    image1: NavImages.mystudents1,
    image2: NavImages.mystudents2,
    textKey: 'Premium',
  },


  // {
  //   path: '/notifications',
  //   image1: NavImages.notification1,
  //   image2: NavImages.notification2,
  //   textKey: 'Nav.Notifications',
  // },

];

export { NavImages, getNavLinks };
