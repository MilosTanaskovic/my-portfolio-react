import React from 'react'

import { Link } from 'react-router-dom';
// Styled
import styled from 'styled-components';
// Img
import netflix from '../img/Projects/img/netflix-clone-background.png';
import leomovies from '../img/Projects/img/LeoMovies-proj.png';
// Projects
//import NetflixCloneReact from '../Components/Projects/NetflixClone';

const MyWork = () => {
 return (
  <Styled_Work>
   {/* Project 1 */}
   <Styled_Project>
    <h2>The Netflix Clone</h2>
    <div className="line"></div>
    <Link>
     <img src={netflix} alt="Netflix Clone Project React"/>
    </Link>
   </Styled_Project>
   {/* End Project 1 */}
   {/* Project 2 */}
   <Styled_Project>
    <h2>The LeoMovies</h2>
    <div className="line"></div>
    <Link>
     <img src={leomovies} alt="LeoMovies Project React"/>
    </Link>
   </Styled_Project>
   {/* End Project 2 */}
  </Styled_Work>
 )
};

const Styled_Work = styled.div`
 min-height: 100vh;
 overflow: hidden;
 padding: 5rem 10rem;
 
 h2{
  padding: 1rem 0rem;
 }
`;
const Styled_Project = styled.div`
 padding-bottom: 10rem;
 .line{
  height: 0.5rem;
  background: #cccccc;
  margin-bottom: 3rem;
 }
 img {
  width: 100%;
  height: 70vh;
  //object-fit: cover;
 }
`;
export default MyWork
