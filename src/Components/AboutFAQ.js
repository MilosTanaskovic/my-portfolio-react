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
      Hi! I'm a Frontend developer with previous skills in both design and developemt modern-slick app! I'm a creative person who thinks code is an amazing tool! I love to work with people and now i want to work with code to create smart, efficient products and websites to help people in their everyday life.
     </p>
   </Toggle>
   <Toggle title="What is your skills and abilities? 🚀">
     <p>LANGUAGES 👨🏻‍💻</p>
     <p>
      JavaScript/ES6+ | HTML5 | CSS3/SASS
     </p>
     <p>FRONTEND 👨🏻‍💻</p>
     <p>
      React | Redux | DOM programming | Responsive Design
     </p>
      <p>BACKEND 👨🏻‍💻</p>
     <p>
      REST API | Authentication
     </p>
     <p>DEVELOPMENT TOOLS 🧰</p>
     <p>
     Command Line (terminal) | Git/Github | VS Code | Chrome dev tools | Netlify | Postman | Slack | Figma | Stackoverflow | (Jest)
     </p>
     <p>DEVELOPMENT PRINCIPLES 🎁</p>
     <p>
      Team Player | Agile Methods | Pair-programming | Web Accessibility | Remote Work
     </p>
   </Toggle>
   <Toggle title="My Work experince? ⚙️">
     <p>
      As mentioned in my CV I am a front-end web developer with 3 years of hands-on experience in coding efficiently websites and applications using modern HTML5, CSS3, SASS, JavaScript/ES6+,React.js RESTful APIs, JSON, Git, Babel, Webpack. I was employed in Svenska Domaner company from December 2018, where I’ve been in charge of maintaining entire front-end part of company’s website on my own. The company is selling web hostings and domains as well as offering customers to create their own websites or blogs via Weebly, WordPress, One-click installer. I was successfully working and collaborating with sales digital managers, web designer and software developer. Here I’ve learned that having a highly collaborative team is a great advantage of each company. Every interaction brings new knowledge, ideas and solutions. Apart from evolving and improving in my coding field of interest, I’ve been exposed and learned a lot about sales, marketing strategies, how to create campaign, how to launch a product. 
     </p>
   </Toggle>
   <Toggle title="What is my technical strength? 🛠️">
     <p>TECH</p>
     <p>
      HTML, CSS, FLexbox, JavaScript , React , Redux, API:s, Node.js, Mongo DB, Web Accessibly, Mob-programming, Pair-programming, Github , Figma.
     </p>
   </Toggle>
   <Toggle title="What does the right opportunity look like for me? 💡">
     <p>
      I’ve been honing my front-end skills for a few years now and, first and foremost, I’m looking for a position where I can continue to exercise those skills. <br/>

      Another thing that’s important to me is that the position allows me to not only play with the front-end stack but also present my findings and suggestions directly to co-workers and the management team. That would be really refreshing! I’m always very motivated by being able to see the impact of my work on other people. <br/>

      And, I'm definitely looking for a position where I can grow-professional development is something that’s really important to me since I hope to take on full-stack(front-end) responsibilities in the future. 
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
