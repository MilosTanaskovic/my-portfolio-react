import React from 'react'
import styled from 'styled-components';
import { Styled_DevTools } from './DevelopmentStyle';
// import Component
import Skill from './Skill';
const Backend = (props) => {
 const {title, description, skills} = props;
 return (
  <Styled_Backend>
   <h2>{title}</h2>
   <p>{description}</p>
   <Styled_Skills>
    {skills.map((skill) => (
     <Skill
      image={skill.image}
      name={skill.name}
     />
    ))}
   </Styled_Skills>
  </Styled_Backend>
 )
}

const Styled_Backend = styled.div`
 padding: 2rem 0rem;
`;
const Styled_Skills = styled(Styled_DevTools)`

`;
export default Backend
