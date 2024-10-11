 
import smallLogo from '../../../images/small_logo2.png';
import blog1 from '../../../images/blog1.png';
import blog2 from '../../../images/blog2.png';
import messages1 from '../../../images/email1.png';
import messages2 from '../../../images/email2.png';
import notification1 from '../../../images/notification1.png';
import notification2 from '../../../images/notification2.png';
import myteachers1 from '../../../images/teachers1.png';
import myteachers2 from '../../../images/teachers2.png';
import mystudents1 from '../../../images/mystudents1.png';
import mystudents2 from '../../../images/mystudents2.png';
import servants1 from '../../../images/servants1.png';
import servants2 from '../../../images/servants2.png';
import community1 from '../../../images/community1.png';
import community2 from '../../../images/community2.png';
import bookmark1 from '../../../images/bookmark1.png';
import bookmark2 from '../../../images/bookmark2.png';
import resources1 from '../../../images/resources1.png';
import resources2 from '../../../images/resources2.png';
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
  myteachers1,
  myteachers2,
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
    path: '/blogPage',
    image1: NavImages.blog1,
    image2: NavImages.blog2,
    textKey: 'Nav.BlogPage',
  },
  {
    path: '/communities',
    image1: NavImages.community1,
    image2: NavImages.community2,
    textKey: 'Nav.Communities',
  },
  {
    path: '/my-students',
    image1: NavImages.myteachers1,
    image2: NavImages.myteachers2,
    textKey: 'Nav.Teaching',
  },
  {
    path: '/my-teachers',
    image1: NavImages.mystudents1,
    image2: NavImages.mystudents2,
    textKey: 'Nav.Learning',
  },
  {
    path: '/resources',
    image1: NavImages.resources1,
    image2: NavImages.resources2,
    textKey: 'Nav.Resources',
  },
  {
    path: '/messages',
    image1: NavImages.messages1,
    image2: NavImages.messages2,
    textKey: 'Nav.Messages',
  },
  {
    path: '/bookmarks',
    image1: NavImages.bookmark1,
    image2: NavImages.bookmark2,
    textKey: 'Nav.Bookmarks',
  },
  // {
  //   path: '/notifications',
  //   image1: NavImages.notification1,
  //   image2: NavImages.notification2,
  //   textKey: 'Nav.Notifications',
  // },
  {
    path: '/servants',
    image1: NavImages.servants1,
    image2: NavImages.servants2,
    textKey: 'Nav.Servants',
  },
  {
    path: `/profile-page/${auth?.userId}`,
    image1: NavImages.myProfile1,
    image2: NavImages.myProfile2,
    textKey: 'Nav.Profile',
  },
];

export { NavImages, getNavLinks };
