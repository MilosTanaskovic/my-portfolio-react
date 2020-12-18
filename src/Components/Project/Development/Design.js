import React from 'react'
import styled from 'styled-components';

const Design = (props) => {
 const {title, description, skills} = props;
 return (
  <Styled_Design>
   <h2>{title}</h2>
   <p>{description}</p>
  </Styled_Design>
 )
};

const Styled_Design = styled.div`

`;

export default Design
