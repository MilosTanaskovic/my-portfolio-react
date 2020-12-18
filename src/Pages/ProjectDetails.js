import React,{ useState, useEffect } from 'react'

import styled from 'styled-components';
// Animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

// import Components/Project
import HeadLine from '../Components/Project/HeadLine';
import Award from '../Components/Project/Award';
import Overview  from '../Components/Project/Overview';
import Video_Demo from '../Components/Project/Video_Demo';
import Developments from '../Components/Project/Developments';
import Footer from '../Components/Project/Footer';

import { useHistory } from 'react-router-dom';
import { ProjectState } from '../projectState';

const ProjectDetails = (props) => {
  const {FontAwesomeIcon, faCopyright, faTrademark} = props;

 const history = useHistory();
 const url = history.location.pathname;
 
 const [projects, setProjects] = useState(ProjectState);
 const [project, setProject] = useState(null);

 useEffect(() => {
  const currentProject = projects.filter((stateProject) => stateProject.url === url);
  setProject(currentProject[0]);
 }, [projects, url]);

 return (
  <>
  { 
   project && (
     <Styled_ProjectDetails 
     variants={pageAnimation}
     initial="hidden"
     animate="show"
     exit="exit"
     >
      {/** Headline Section */}
      <HeadLine project={project}/>
      {/** Overview Section */}
      <Styled_Overview>
        {project.overviews.map((overview) => (
        <Overview
          title={overview.title}
          description={overview.description}
          key={overview.title}
        />
      ))}
      </Styled_Overview>
      {/** Video Section */}
      {project.video_demos.map((video_demo) => (
        <Video_Demo 
        title={video_demo.title}
        link={video_demo.link}
        video={video_demo.video}
        poster={video_demo.poster}
        />
      ))}
      {/** Awards Section */}
      <Styled_Awards>
       {project.awards.map((award) => ( 
       <Award 
        title={award.title} 
        description={award.description} 
        key={award.title}
       />
      ))}
      </Styled_Awards>
      {/** Developmennt Section */}
      {project.developments.map((developement) => (
         <Developments
          developement={developement}
        />
      ))}
      {/** Footer Section */}
      <Footer
        FontAwesomeIcon={FontAwesomeIcon}
        faCopyright={faCopyright}
        faTrademark={faTrademark}
      />
     </Styled_ProjectDetails>
   )
  }
  </>
 );
};

const Styled_ProjectDetails = styled(motion.div)`
 color: white;

`;
const Styled_Main = styled.div`
 min-height: 80vh;
 display: flex;
 margin: 5rem 10rem;
 align-items: center;
 justify-content: space-around;
 @media (max-width: 1100px){
    display: block;
    margin: 2rem 2rem;
  }
`;
const Styled_Overview = styled(Styled_Main)`

`;
const Styled_Awards = styled(Styled_Main)`

`;

export default ProjectDetails;
