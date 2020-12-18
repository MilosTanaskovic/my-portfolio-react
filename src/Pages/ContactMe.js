import React from 'react'
// Icons
// Animation
import { motion, AnimateSharedLayout } from 'framer-motion';
import { pageAnimation, titleAnim, scrollReveal } from '../animation';
import styled from 'styled-components';
import ToggleContact from '../Components/ToggleContact';
import { Link } from 'react-router-dom';
const ContactMe = (props) => {
  const {FontAwesomeIcon,
        faFacebookF,
        faLinkedin,
        faFacebookMessenger,
        faWhatsapp,
        faTelegram,
        faInstagram,
        faGithub,
        faStackOverflow} = props;
 return (
  <Styled_Contact
   variants={scrollReveal}
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
   <AnimateSharedLayout>
    <Styled_Hide>
     <Styled_Social variants={titleAnim}>
      <Styled_Circle/>
      <ToggleContact title="Send Me A Message">
       <a target="_blank" href="https://www.linkedin.com/in/milos-tanaskovic-codedancing-619742130/">
        <Styled_Icon><FontAwesomeIcon icon={faLinkedin} /></Styled_Icon>
       </a>
       <a target="_blank" href="https://www.facebook.com/messages/t/101285751393004">
        <Styled_Icon><FontAwesomeIcon icon={faFacebookMessenger} /></Styled_Icon>
       </a>
       <a target="_blank" href="https://www.linkedin.com/in/milos-tanaskovic-codedancing-619742130/">
        <Styled_Icon><FontAwesomeIcon icon={faWhatsapp} /></Styled_Icon>
       </a>
       <a target="_blank" href="https://t.me/DancingWithThCode">
        <Styled_Icon><FontAwesomeIcon icon={faTelegram} /></Styled_Icon>
       </a>
      </ToggleContact>
     </Styled_Social>
    </Styled_Hide>
    </AnimateSharedLayout>
    <Styled_Hide>
     <Styled_Social variants={titleAnim}>
      <Styled_Circle/>
      <Styled_Alink href={"mailto:milos@tanaskovic.se"}><h2>Send an email</h2></Styled_Alink>
     </Styled_Social>
    </Styled_Hide>
    <AnimateSharedLayout>
    <Styled_Hide>
     <Styled_Social variants={titleAnim}>
      <Styled_Circle/>
      <ToggleContact title="Social Media">
       <a target="_blank" href="https://www.linkedin.com/in/milos-tanaskovic-codedancing-619742130/">
        <Styled_Icon><FontAwesomeIcon icon={faLinkedin} /></Styled_Icon>
       </a>
       <a target="_blank" href="https://github.com/MilosTanaskovic">
        <Styled_Icon><FontAwesomeIcon icon={faGithub} /></Styled_Icon>
       </a>
       <a target="_blank" href="https://stackoverflow.com/users/story/11797438">
        <Styled_Icon><FontAwesomeIcon icon={faStackOverflow} /></Styled_Icon>
       </a>
       <a target="_blank" href="https://www.facebook.com/codedancing">
        <Styled_Icon><FontAwesomeIcon icon={faFacebookF} /></Styled_Icon>
       </a>
       <a target="_blank" href="https://www.instagram.com/codedancingup/">
        <Styled_Icon><FontAwesomeIcon icon={faInstagram} /></Styled_Icon>
       </a>
      </ToggleContact>
     </Styled_Social>
    </Styled_Hide>
    </AnimateSharedLayout>
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
const Styled_Icon = styled.span`
 font-size: 3rem;
 color: #353535;
 padding-left: 2.5rem;
`;
const Styled_Alink = styled.a`
  color: #353535;
  text-decoration: none;
`;

export default ContactMe
