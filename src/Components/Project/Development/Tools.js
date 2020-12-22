import React from 'react'
import styled from 'styled-components';
import { Styled_DevTools } from './DevelopmentStyle';
// import Comonent
import Skill from './Skill';

const Tools = (props) => {
 const {title, description, skills} = props;
 return (
  <Styled_Tools>
   <h2>{title}</h2>
   <p>{description}</p>
   {/** Tools */}
   <Styled_Tool>
   {skills.map((skill) => (
    <Skill
     image={skill.image}
     name={skill.name}
    />
    ))}
   </Styled_Tool>
  </Styled_Tools>
 )
}

const Styled_Tools = styled.div`
 padding: 2rem 0rem;
`;
const Styled_Tool = styled(Styled_DevTools)`

`;
export default Tools
