import React,{ useState, useEffect } from 'react'

import styled from 'styled-components';
// Animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

// import Components/Project
import HeadLine from '../Components/Project/HeadLine';
import Award from '../Components/Project/Award';

import { useHistory } from 'react-router-dom';
import { ProjectState } from '../projectState';

const ProjectDetails = () => {
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
      <HeadLine project={project}/>
      <Styled_Awards>
       {project.awards.map((award) => ( 
       <Award 
        title={award.title} 
        description={award.description} 
        key={award.title}
       />
      ))}
      </Styled_Awards>
     </Styled_ProjectDetails>
   )
  }
  </>
 );
};

const Styled_ProjectDetails = styled(motion.div)`
 color: white;

`;
const Styled_Awards = styled.div`
 min-height: 80vh;
 display: flex;
 margin: 5rem 10rem;
 align-items: center;
 justify-content: space-around;
`;

export default ProjectDetails;
