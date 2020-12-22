// img
import netflixclone from './img/Projects/img/netflix-clone-background.png';
import leomovie from './img/Projects/img/LeoMovies-proj.png';
// video-demo
import netflixclonevideo from './img/Projects/video/Bela-Ciao-2.mp4';
//import netflixclonevideo from './img/Projects/video/video.mp4';
// Link
const linkNetflixClone = "https://netflix-clone-react-b8c3d.web.app/?fbclid=IwAR29uO-_9OsluvYiz-9qmrKOkWWpiBahSvzQZyCTzDVM-GzvKyhgQLo1CGA";
const githubNetflixClone = "https://github.com/MilosTanaskovic/Netflix-Clone-With-React_JS";
// Skills Icons
const materialUI = 'https://uploads-ssl.webflow.com/5cf020f0e1695d04b984df8a/5d544de96e496119130834f3_material-ui-logo.svg';
const reactJS = 'https://uploads-ssl.webflow.com/5cf020f0e1695d04b984df8a/5d31ecb437c5c8f9b6b08d43_react.svg';
const reduxJS = 'https://uploads-ssl.webflow.com/5cf020f0e1695d04b984df8a/5d31ecf57b296b858f22da78_redux.svg';


export const ProjectState = () => {
 return [
  {
   title: 'Netflix Clone',
   mainImg: netflixclone,
   url: '/work/netflix-clone-react',
   overviews: [
    {
     title: 'Project Overview',
     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus aliquam perspiciatis consequuntur commodi fugiat itaque, reiciendis eos, dolorem voluptatibus, quisquam ullam quae dolorum quos magnam? Eum deleniti dignissimos fuga sed!'
    },
    {
     title: 'My Contributions',
     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus aliquam perspiciatis consequuntur commodi fugiat itaque, reiciendis eos, dolorem voluptatibus, quisquam ullam quae dolorum quos magnam? Eum deleniti dignissimos fuga sed!'
    }
   ],
   video_demos: [
    {
     title: 'Demo Netflix Clone',
     demolink: linkNetflixClone,
     video: netflixclonevideo,
     githublink: githubNetflixClone,
     poster: netflixclone,
    }
   ],
   // awards: [
   //  {
   //   title: 'Name of Firm',
   //   date: '11/11/2020 - 12/12/2020 date from to contribute with them',
   //  },
   //  {
   //   description: 'sadadsadsadasd'
   //  }
   // ],
   
   developments: [
    {
     // designs: [
     //  {
     //   title: 'UX/UI Design',
     //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus aliquam perspiciatis consequuntur commodi fugiat itaque, reiciendis eos, dolorem voluptatibus, quisquam ullam quae dolorum quos magnam? Eum deleniti dignissimos fuga sed!',
     //   skills: ''
     //  },
     // ],
     frontends: [
      {
       title: 'Front-end development 🚀',
       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus aliquam perspiciatis consequuntur commodi fugiat itaque, reiciendis eos, dolorem voluptatibus, quisquam ullam quae dolorum quos magnam? Eum deleniti dignissimos fuga sed!',
       skills: [
        {
         image: reactJS,
         name: 'React'
        },
        {
         image: materialUI,
         name: 'Material UI'
        },
        {
         image: reduxJS,
         name: 'Redux'
        }
        
       ],
      }
     ],
     backends: [
      {
       title: 'Back-end development 👨🏻‍💻',
       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus aliquam perspiciatis consequuntur commodi fugiat itaque, reiciendis eos, dolorem voluptatibus, quisquam ullam quae dolorum quos magnam? Eum deleniti dignissimos fuga sed!',
       skills: [
        {
         image: reactJS,
         name: 'React'
        },
        {
         image: materialUI,
         name: 'Material UI'
        }
       ],
      }
     ],
     tools: [
      {
       title: 'Development Tools 🧰',
       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus aliquam perspiciatis consequuntur commodi fugiat itaque, reiciendis eos, dolorem voluptatibus, quisquam ullam quae dolorum quos magnam? Eum deleniti dignissimos fuga sed!',
       skills: [
        {
         image: reactJS,
         name: 'React'
        },
        {
         image: materialUI,
         name: 'Material UI'
        },
        {
         image: reduxJS,
         name: 'Redux'
        },
         {
         image: reduxJS,
         name: 'Redux'
        },
        {
         image: reactJS,
         name: 'React'
        },
        {
         image: materialUI,
         name: 'Material UI'
        },
        {
         image: reduxJS,
         name: 'Redux'
        },
         {
         image: reduxJS,
         name: 'Redux'
        }
        
       ],
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