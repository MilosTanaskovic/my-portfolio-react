import React from 'react'
// import svg, img
import clock from '../img/About/clock.svg';
import diaphragm from '../img/About/diaphragm.svg';
import money from '../img/About/money.svg';
import teamwork from '../img/About/teamwork.svg';
import home2 from '../img/About/services-js.jpg';
// Styles
import styled from 'styled-components';
import { Styled_About, Styled_Description, Styled_Image } from './StyledAbout';
import { scrollReveal } from '../animation';
import { useScroll } from './useScroll';

const AboutServices = () => {
 const [element, controls] = useScroll();
 return (
  <Styled_Services 
   variants={scrollReveal} 
   animate={controls} 
   initial="hidden"
   ref={element}>
   {/* Description Section */}
   <Styled_Description>
   <h2>
    High <span>quality</span> services
   </h2>
   <Styled_Cards>
    <Styled_Card>
     <div className="icon">
      <img src={clock} alt="sevices clock"/>
      <h3>Efficinet</h3>
     </div>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
    </Styled_Card>
    <Styled_Card>
     <div className="icon">
      <img src={teamwork} alt="sevices teamwork"/>
      <h3>Teamwork</h3>
     </div>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
    </Styled_Card>
    <Styled_Card>
     <div className="icon">
      <img src={diaphragm} alt="sevices diaphragm"/>
      <h3>Diaphragm</h3>
     </div>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
    </Styled_Card>
    <Styled_Card>
     <div className="icon">
      <img src={money} alt="sevices money"/>
      <h3>Save money</h3>
     </div>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
    </Styled_Card>
   </Styled_Cards>
   </Styled_Description>
   {/* Image Section */}
   <Styled_Image>
    <img src={home2} alt="service programming"/>
   </Styled_Image>
  </Styled_Services>
 )
};

const Styled_Services = styled(Styled_About)`
 h2{
  padding-bottom: 5rem;
 }
 p{
  width: 70%;
  padding: 2rem 0rem 4rem 0rem;
 }
`;
const Styled_Cards = styled.div`
 display: flex;
 flex-wrap: wrap;
 @media (max-width: 1100px){
  justify-content: center;
 }
`;
const Styled_Card = styled.div`
 flex-basis: 20rem;
 .icon{
  display: flex;
  align-items: center;
  h3 {
   margin-left: 1rem;
   background: white;
   color: black;
   padding: 1rem;
  }
 }
`;
export default AboutServices
