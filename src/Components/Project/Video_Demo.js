import React from 'react'
// import video
// import { Player } from 'video-react';
// import style
import styled from 'styled-components';

const Video_Demo = (props) => {
 const {title, link, video, poster} = props
 return (
  <Styled_VideoDemo>
   <h3>{title}</h3>
   <p>{link}</p>
   <video src={video} controls></video>
  </Styled_VideoDemo>
 )
};

const Styled_VideoDemo = styled.div`
 min-height: 90vh;
 padding-top: 20vh;
 position: relative;
 h3{
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -10%);
 }
 video{
  width: 100%;
  height: 100vh;
  object-fit: cover;
 }
`;

export default Video_Demo
