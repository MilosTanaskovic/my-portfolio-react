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
    <Toggle title="Who is Milos Tanaskovic? 🤗">
     <p>React | Redux | JavaScript | Frontend developer - lifelong student and a creative</p>
     <p>
      Hi! I'm a Frontend developer with previous skills as team leader in both service and security! I'm a creative person who thinks code is an amazing tool! I love to work with people and now i want to work with code to create smart, efficient products and websites to help people in their everyday life.
     </p>
   </Toggle>
   <Toggle title="My Work experince? ⚙️">
     <p>sadsadasd</p>
     <p>
      As mentioned in my CV I am a front-end web developer with 3 years of hands-on experience in coding efficiently websites and applications using modern HTML5, CSS3, SASS, LESS, JavaScript/ES6+,React.js RESTful APIs, JSON, Git, Babel, Webpack. I was employed in Svenska Domaner company from December 2018, where I’ve been in charge of maintaining entire front-end part of company’s website on my own. The company is selling web hostings and domains as well as offering customers to create their own websites or blogs via Weebly, WordPress, One-click installer. I was successfully working and collaborating with sales digital managers, web designer and software developer. Here I’ve learned that having a highly collaborative team is a great advantage of each company. Every interaction brings new knowledge, ideas and solutions. Apart from evolving and improving in my coding field of interest, I’ve been exposed and learned a lot about sales, marketing strategies, how to create campaign, how to launch a product. 
     </p>
   </Toggle>
   <Toggle title="What is your technical strength? 🛠️">
     <p>TECH</p>
     <p>
      HTML, CSS, FLexbox, JavaScript , React , Redux, API:s, Node.js, Mongo DB, Web Accessibly, Mob-programming, Pair-programming, Github , Figma.
     </p>
   </Toggle>
   <Toggle title="What is your skills and abilities?">
     <p>CODE 👨🏻‍💻</p>
     <p>
      React, React Hooks, Redux, Javascript/ES6+, HTML5, CSS3/SASS, Node.js, GitHub
     </p>
     <p>TOOLBOX 🧰</p>
     <p>
      VS code | Slack | Figma | Stackoverflow
     </p>
     <p>UPCOMING 🚀</p>
     <p>
      Next.js | Mongo DB
     </p>
     <p>MORE 🎁</p>
     <p>
      Team Player | Agile Methods | Pair-programming | Mob-programming | Web Accessibility | Remote Work
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
