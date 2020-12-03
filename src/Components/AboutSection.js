import React from 'react'
// import img
import Img from '../img/About/MilosTanaskovic.jpg';
// Styled
import styled from 'styled-components';
import { Styled_About, Styled_Description, Styled_Image, Styled_Hide } from './StyledAbout';
const AboutSection = () => {
 return (
  <Styled_About>
    <Styled_Description>
    <div className="title">
     <Styled_Hide>
      <h2>We work to make</h2>
     </Styled_Hide>
     <Styled_Hide>
      <h2>
       your <span>dreams</span> come
      </h2>
     </Styled_Hide>
     <Styled_Hide>
      <h2>true.</h2>
     </Styled_Hide>
    </div>
    <p>
     Conatct me for any task or proggraming idea have professional with amazing skills.
    </p>
    <button>Contact Me</button>
   </Styled_Description>
   <Styled_Image>
    <img src={Img} width={200} height={200} alt="Image Milos Tanaskovic"/>
   </Styled_Image>
  </Styled_About>
 )
}


export default AboutSection
