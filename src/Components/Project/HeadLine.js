import React from 'react'

import styled from 'styled-components';

const HeadLine = (props) => {
 const { project } = props;
 return (
   <Styled_HeadLine>
    <h2>{project.title}</h2>
    <img src={project.mainImg} alt=""/>
   </Styled_HeadLine>
 )
}

const Styled_HeadLine = styled.div`
 min-height: 90vh;
 padding-top: 20vh;
 position: relative;
 h2{
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -10%);
 }
 img{
  width: 100%;
  height: 70vh;
  object-fit: cover;
 }
`;

export default HeadLine
