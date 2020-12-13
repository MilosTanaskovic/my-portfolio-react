import React from 'react'

import { Link } from 'react-router-dom';
// Styled
import styled from 'styled-components';
// Img
import netflix from '../img/Projects/img/netflix-clone-background.png';
import leomovies from '../img/Projects/img/LeoMovies-proj.png';
// Projects
//import NetflixCloneReact from '../Components/Projects/NetflixClone';
// animations
import { motion } from 'framer-motion';
import { pageAnimation, fade, photoAnim, lineAnim, sliderAnim, sliderContainer } from '../animation';
import { useScroll } from '../Components/useScroll';
const MyWork = () => {
 const [element, controls] = useScroll();
 const [element2, controls2] = useScroll();
 return (
  <Styled_Work 
   variants={pageAnimation}
   initial="hidden"
   animate="show"
   exit="exit"
   style={{background: '#fff'}}
  >
   <motion.div variants={sliderContainer}>
    <Styled_Frame1 
    variants={sliderAnim}></Styled_Frame1>
   <Styled_Frame2 
    variants={sliderAnim}></Styled_Frame2>
   <Styled_Frame3 
    variants={sliderAnim}></Styled_Frame3>
   <Styled_Frame4 
    variants={sliderAnim}></Styled_Frame4>
   </motion.div>
   
   {/* Project 1 */}
   <Styled_Project>
    <motion.h2 variants={fade}>The Netflix Clone</motion.h2>
    <motion.div variants={lineAnim} className="line"></motion.div>
    <Link to="/work/netflix-clone-react">
     <Styled_Hide>
      <motion.img variants={photoAnim} src={netflix} alt="Netflix Clone Project React"/>
     </Styled_Hide>
    </Link>
   </Styled_Project>
   {/* End Project 1 */}
   {/* Project 2 */}
   <Styled_Project
    variants={fade}
    animate={controls}
    initial="hidden"
    ref={element}
   >
    <h2>The LeoMovies</h2>
    <motion.div variants={lineAnim} className="line"></motion.div>
    <Link to="/work/netflix-clone-react">
     <img src={leomovies} alt="LeoMovies Project React"/>
    </Link>
   </Styled_Project>
   {/* End Project 2 */}
   {/* Project 3 */}
   <Styled_Project
    variants={fade}
    animate={controls2}
    initial="hidden"
    ref={element2}
   >
    <h2>The LeoMovies</h2>
    <motion.div variants={lineAnim} className="line"></motion.div>
    <Link to="/work/netflix-clone-react">
     <img src={leomovies} alt="LeoMovies Project React"/>
    </Link>
   </Styled_Project>
   {/* End Project 3 */}
  </Styled_Work>
 )
};

const Styled_Work = styled(motion.div)`
 min-height: 100vh;
 overflow: hidden;
 padding: 5rem 10rem;
 
 h2{
  padding: 1rem 0rem;
 }
`;
const Styled_Project = styled(motion.div)`
 padding-bottom: 10rem;
 .line{
  height: 0.5rem;
  background: #23d997;
  margin-bottom: 3rem;
 }
 img {
  width: 100%;
  height: 70vh;
  //object-fit: cover;
 }
`;
const Styled_Hide = styled.div`
 overflow: hidden;
`;
const Styled_Frame1 = styled(motion.div)`
 position: fixed;
 left: 0;
 top: 10%;
 width: 100%;
 height: 100vh;
 background: #fffebf;
 z-index: 2;
`;
const Styled_Frame2 = styled(Styled_Frame1)`
 background: #ff8efb;
`;
const Styled_Frame3 = styled(Styled_Frame1)`
 background: #8ed2ff;
`;
const Styled_Frame4 = styled(Styled_Frame1)`
 background: #8effa0;
`;
export default MyWork
