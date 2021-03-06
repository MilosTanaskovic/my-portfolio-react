import React from 'react'
import styled from 'styled-components';
import { Styled_DevTools } from './DevelopmentStyle';
// import component
import Skill from './Skill';
const Design = (props) => {
 const {title, description, skills} = props;
 return (
  <Styled_Design>
   <h2>{title}</h2>
   <p>{description}</p>
   <Styled_DesignTools>
   {skills.map((skill) => (
    <Skill
     image={skill.image}
     name={skill.name}
    />
   ))}
   </Styled_DesignTools>
  </Styled_Design>
 )
};

const Styled_Design = styled.div`
 padding: 2rem 0rem;
`;
const Styled_DesignTools = styled(Styled_DevTools)`

`;

export default Design
