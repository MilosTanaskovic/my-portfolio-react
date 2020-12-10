import React from 'react'
// import img
import Img from '../img/About/MilosTanaskovic.jpg';
import Wave from './Wave';
// Styled
import styled from 'styled-components';
import { Styled_About, Styled_Description, Styled_Image, Styled_Hide } from './StyledAbout';
// Animation
import {motion} from 'framer-motion';
import {titleAnim, fade, photoAnim} from '../animation';
const AboutSection = () => {
 return (
  <Styled_About>
    <Styled_Description>
    <motion.div>
     <Styled_Hide>
      <motion.h2
        variants={titleAnim}
      >We work to make</motion.h2>
     </Styled_Hide>
     <Styled_Hide>
      <motion.h2
      variants={titleAnim}
      >
       your <span>dreams</span> come
      </motion.h2>
     </Styled_Hide>
     <Styled_Hide>
      <motion.h2
      variants={titleAnim}
      >true.</motion.h2>
     </Styled_Hide>
    </motion.div>
    <motion.p
    variants={fade}
    >
     Conatct me for any task or proggraming idea have professional with amazing skills.
    </motion.p>
    <motion.button 
    variants={fade}
    >Contact Me</motion.button>
   </Styled_Description>
   <Styled_Image>
    <motion.img variants={photoAnim} src={Img} style={{width:'200', height:'200'}}  alt="Image Milos Tanaskovic"/>
   </Styled_Image>
   <Wave/>
  </Styled_About>
 )
}


export default AboutSection
