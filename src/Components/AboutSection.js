import React from 'react'
// import img
import Img from '../img/About/MilosTanaskovic.jpg';
// Styled
import styled from 'styled-components';
const AboutSection = () => {
 return (
  <Styled_About>
    <Styled_Description>
    <div className="title">
     <Styled_Hide>
      <h2>We work to make</h2>
     </Styled_Hide>
     <Styled_Hide>
      <h2>
       your <span>dreams</span> come
      </h2>
     </Styled_Hide>
     <Styled_Hide>
      <h2>true.</h2>
     </Styled_Hide>
    </div>
    <p>
     Conatct me for any task or proggraming idea have professional with amazing skills.
    </p>
    <button>Contact Me</button>
   </Styled_Description>
   <Styled_Image>
    <img src={Img} width={200} height={200} alt="Image Milos Tanaskovic"/>
   </Styled_Image>
  </Styled_About>
 )
}
// Styled Components
const Styled_About = styled.div`
 min-height: 90vh;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 5rem 10rem;
 color: white;
`;
const Styled_Description = styled.div`
 flex: 1;
 padding-right: 5rem;
 h2{
  font-weight:lighter;
 }
`;
const Styled_Image = styled.div`
 flex: 1;
 overflow: hidden;
 img{
  width: 100%;
  height: 80vh;
  object-fit: cover;
 }
`;
const Styled_Hide = styled.div`
 overflow: hidden;
`;

export default AboutSection
