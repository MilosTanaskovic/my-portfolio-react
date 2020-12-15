import React from 'react'
// Animation
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from '../animation';
import styled from 'styled-components';

const ContactMe = () => {
 return (
  <Styled_Contact
   variants={pageAnimation}
   initial="hidden"
   animate="show"
   exit="exit"
   style={{background: "#fff"}}
  >
   <Styled_Title>
    <Styled_Hide>
     <motion.h2
      variants={titleAnim}
     
     >Get in touch</motion.h2>
    </Styled_Hide>
   </Styled_Title>
   <div>
    <Styled_Hide>
     <Styled_Social variants={titleAnim}>
      <Styled_Circle/>
      <h2>Send Me A Message</h2>
     </Styled_Social>
    </Styled_Hide>
    <Styled_Hide>
     <Styled_Social variants={titleAnim}>
      <Styled_Circle/>
      <h2>Send an email</h2>
     </Styled_Social>
    </Styled_Hide>
    <Styled_Hide>
     <Styled_Social variants={titleAnim}>
      <Styled_Circle/>
      <h2>Social Media</h2>
     </Styled_Social>
    </Styled_Hide>
   </div>
  </Styled_Contact>
 )
}

const Styled_Contact = styled(motion.div)`
 padding: 5rem 10rem;
 color: #353535;
 min-height: 90vh;
 @media (max-width: 1500px){
  padding: 2rem;
  font-size: 1rem;
 }
`;
const Styled_Title = styled(motion.div)`
 margin-bottom: 4rem;
 color: black;
 @media (max-width: 1300px){
  margin-top: 5rem;
 }
`;
const Styled_Hide = styled.div`
 overflow: hidden;
`;
const Styled_Circle = styled.div`
 border-radius: 50%;
 width: 3rem;
 height: 3rem;
 background: #353535;

`;
const Styled_Social = styled(motion.div)`
 display: flex;
 align-items: center;
 h2{
  margin: 2rem;
 }
`;

export default ContactMe
