import React from 'react'
// import styled
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
const Nav = () => {
 const {pathname} = useLocation();
 return (
  <Styled_Nav>
   <h1>
    <Link id="logo" to="/">MilosT  ? 'ReactDancing' : 'Frontend Dev'</Link>
   </h1>
   <ul>
    <li>
     <Link to="/">1. About Me</Link>
     <Styled_Line 
      transition={{duration: 0.75}}
      initial={{width: "0%"}}
      animate={{width: pathname === '/' ? '70%' : '0%'}}
      />
    </li>
    <li>
     <Link to="/work">2. My Work</Link>
     <Styled_Line 
      transition={{duration: 0.75}}
      initial={{width: "0%"}}
      animate={{width: pathname === '/work' ? '70%' : '0%'}}
      />
     </li>
    <li>
     <Link to="/contact">3. Contact Me</Link>
     <Styled_Line 
      transition={{duration: 0.75}}
      initial={{width: "0%"}}
      animate={{width: pathname === '/contact' ? '70%' : '0%'}}
      />
    </li>
   </ul>
  </Styled_Nav>
 )
}

const Styled_Nav = styled.nav`
 min-height: 10vh;
 display: flex;
 margin: auto;
 justify-content: space-between;
 align-items: center;
 padding: 1rem 10rem;
 background: #282828;
 position: sticky;
 top: 0;
 z-index: 10;
 a{
  color: white;
  text-decoration: none;
 }
 ul{
  display: flex;
  list-style: none;

 }
 #logo {
  font-size: 1.5rem;
  font-family: "Lobster", cursive;
  font-weight: lighter;
 }
 li{
  padding-left: 3rem;
  position: relative;
 }
 @media (max-width: 900px){
  flex-direction: column;
  padding: 2rem 1rem;
  #logo {
   display: inline-block;
   margin: 1rem;
  }
  ul{
   padding: 2rem;
   justify-content: space-around;
   width: 100%;
   li {
    padding: 0;
   }
  }
 }
`;
const Styled_Line = styled(motion.div)`
 height: 0.3rem;
 background: #23d997;
 width: 0%;
 position: absolute;
 bottom: -80%;
 left: 60%;
 @media (max-width: 900px){
   left: 0%;
  }
  @media (min-width: 900px){
   left: 33%;
  }
`;
export default Nav
