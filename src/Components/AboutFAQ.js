import React from 'react'
// import srtyled
import styled from 'styled-components';
import { Styled_About } from './StyledAbout';
import { AnimateSharedLayout } from 'framer-motion';
// import toggle component
import Toggle from "./Toggle";
// Scroll Animation
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';

const AboutFAQ = () => {
  const [element, controls] = useScroll();
 return (
  <Styled_FAQ 
    variants={scrollReveal}
    animate={controls}
    initial="hidden"
    ref={element}
    >
   <h2>Any question <span>FAQ</span></h2>
   <AnimateSharedLayout>
    <Toggle title="How Do I Start?">
     <p>sadsadasd</p>
     <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos veritatis voluptatum aliquam beatae quidem non maiores totam. Maiores iusto eius nisi, enim facere quidem fugiat quo. Sapiente, quis illum?
     </p>
   </Toggle>
   <Toggle title="Daily Schedule?">
     <p>sadsadasd</p>
     <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos veritatis voluptatum aliquam beatae quidem non maiores totam. Maiores iusto eius nisi, enim facere quidem fugiat quo. Sapiente, quis illum?
     </p>
   </Toggle>
   <Toggle title="My Work experince?">
     <p>sadsadasd</p>
     <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos veritatis voluptatum aliquam beatae quidem non maiores totam. Maiores iusto eius nisi, enim facere quidem fugiat quo. Sapiente, quis illum?
     </p>
   </Toggle>
   <Toggle title="What product do you offer?">
     <p>sadsadasd</p>
     <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos veritatis voluptatum aliquam beatae quidem non maiores totam. Maiores iusto eius nisi, enim facere quidem fugiat quo. Sapiente, quis illum?
     </p>
   </Toggle>
   </AnimateSharedLayout>
  
  </Styled_FAQ>
 )
}

const Styled_FAQ = styled(Styled_About)`
 display: block;
 span {
  display: block;
 }
 h2{
  padding-bottom: 2rem;
  font-weight: lighter;
 }
 .faq-line{
  background: #cccccc;
  height: 0.2rem;
  margin: 2rem 0rem;
  width: 100%;
 }
 .question{
  padding: 3rem 0rem;
  cursor: pointer;
 }
 .answer{
  padding: 2rem 0rem;
  p{
   padding: 1rem 0rem;
  }
 }
`;

export default AboutFAQ
