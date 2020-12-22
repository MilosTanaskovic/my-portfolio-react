import React from 'react'
// import video
// import { Player } from 'video-react';
// import style
import styled from 'styled-components';

const Video_Demo = (props) => {
 const {title, demolink, video, githublink, poster} = props
 return (
  <Styled_VideoDemo>
   <h3>{title}</h3>
   <p><a href={demolink} target="_blank" rel="noopener noreferrer">Open demo in new Window
      </a> or try it down below</p>
   <video src={video} controls></video>
   <p><a href={githublink} target="_blank" rel="noopener noreferrer">Find Source Code on GitHub</a></p>
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
  font-size: 3rem;
 }
 p{
  text-align: center; 
 }
 video{
  width: 100%;
  height: 100vh;
  object-fit: cover;
 }
`;

export default Video_Demo
