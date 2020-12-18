// img
import netflixclone from './img/Projects/img/netflix-clone-background.png';
import leomovie from './img/Projects/img/LeoMovies-proj.png';
// video-demo
import netflixclonevideo from './img/Projects/video/Bela-Ciao-2.mp4';
//import netflixclonevideo from './img/Projects/video/video.mp4';

export const ProjectState = () => {
 return [
  {
   title: 'Netflix Clone',
   mainImg: netflixclone,
   url: '/work/netflix-clone-react',
   overviews: [
    {
     title: 'Project Overview',
     description: 'Sugarstone is a web application that offers easy file management of a large archive of documents that can be easily accessed and searched digitally. It also incorporates document scanning functionality which enables fast and easy search for specific content in the document.'
    },
    {
     title: 'My Contributions',
     description: 'As a lead UX & UI Designer, I took responsibility for designing a file management system that is familiar and easy to use. Apart from interviewing, sketching, wireframing, low & high-fidelity prototyping I take a big part in the development process.'
    }
   ],
   video_demos: [
    {
     title: 'Demo Netflix Clone',
     link: 'Open demo in new Window or try it down below',
     video: netflixclonevideo,
     poster: netflixclone,
    }
   ],
   awards: [
    {
     title: 'Name of Firm',
     date: '11/11/2020 - 12/12/2020'
    },
    {
     description: 'sadadsadsadasd'
    }
   ],
   developments: [
    {
     designs: [
      {
       title: 'UX/UI Design',
       description: 'ghgjhh',
       skills: ''
      },
     ],
     frontends: [
      {
       title: 'Front-end development',
       description: 'adsadsad',
       skills: '',
      }
     ],
     backends: [
      {
       title: 'Front-end development',
       description: 'adsadsad',
       skills: '',
      }
     ],
     tools: [
      {

      }
     ],
    },
   ]

  },
  {
   title: 'Netflix Clone',
   mainImg: netflixclone,
   url: '/work/netflix-clone-react',
   date: '11/11/2020',
   awards: [
    {
     title: 'React Netflix Clone Proect',
     description: 'sadadsadsadasd'
    },
    {
     title: 'React Netflix Clone Proect',
     description: 'sadadsadsadasd'
    }
   ]
  }
 ]
}