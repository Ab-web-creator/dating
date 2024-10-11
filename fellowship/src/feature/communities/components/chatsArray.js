import commty1 from '../../../images/commty1.jpeg';
import commty2 from '../../../images/commty2.jpeg';
import commty3 from '../../../images/commty3.jpg';
import commty4 from '../../../images/commty4.png';
import commty5 from '../../../images/commty5.png';
import commty8 from '../../../images/commty8.jpg';


const chatsArray = [
  {
    groupName: 'Teenagers',
    commonInterest: 'Enjoy the Life',
    peopleInChat: 4,
    description: 'We are learning together JS aspects of React framework. You need to know HTML and CSS, and basic stuff with JavaScript.',
    color: 'red',
    fromWho: 'myStudent',
    image: commty1,
  },

  {
    groupName: '40+ plus',
    commonInterest: 'We want to do good',
    peopleInChat: 8,
    description: 'Life is not what it used to be, but we are still useful. Bring your wisdom and experience to help younger generations.',
    color: 'green',
    fromWho: 'myStudent',
    image: commty3,
  },

  {
    groupName: 'Samarqand Jamoat',
    commonInterest: 'Sevgi va Tinchlik',
    peopleInChat: 16,
    description: 'Lorem impsum prostoy odamlar fraze on, pralelo kutano bravo. Hirarce niemand snap it, but it is ok to continue.',
    color: 'blue',
    fromWho: 'myTeacher',
    image: commty4,
  },
  {
    groupName: 'Duogóylar',
    commonInterest: 'Every Tue, 20:00',
    peopleInChat: 9,
    description: 'Lorem impsum prostoy odamlar fraze on, pralelo kutano bravo. Hirarce niemand snap it, but it is ok to continue.',
    color: 'purple',
    fromWho: 'myTeacher',
    image: commty5,
  },
  {
    groupName: 'BBQ party',
    commonInterest: 'Who is gonna bring what?',
    peopleInChat: 29,
    description: 'Lorem impsum prostoy odamlar fraze on, pralelo kutano bravo. Hirarce niemand snap it, but it is ok to continue...',
    color: 'red',
    fromWho: 'myTeacher',
    image: commty8,
  },

  {
    groupName: 'Astronoms',
    commonInterest: 'Cosmos is not endless',
    peopleInChat: 29,
    description: 'Reality beyond the earth may sound mystical, but it is not. Science helps us to understand it. Join us to discover more.',
    fromWho: 'Astronom',
    image: commty2,
  },

  // Add more cHats as needed
];

export default chatsArray
