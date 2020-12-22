import React from 'react'
import styled from 'styled-components';

const Skill = (props) => {
 const {image, name} = props;
 return (
  <Styled_Skill>
   <img src={image} alt="" width='35' height='35'/> 
   <h4>{name}</h4>
  </Styled_Skill>
 )
}

const Styled_Skill = styled.div`
 display: flex;
 gap: 1rem;
 padding: 3rem;
`;
export default Skill
