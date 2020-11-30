import React from 'react'
// import img
import Img from '../img/About/MilosTanaskovic.jpg';
const AboutSection = () => {
 return (
  <div className="about__section">
   <div className="description">
    <div className="title">
     title
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, corporis! Voluptas natus repellat, provident odit reprehenderit repellendus nihil dicta iusto laborum quibusdam aspernatur dolor adipisci doloribus explicabo sed unde. Esse.</p>
    <button>Contact Me</button>
   </div>
   <div className="image">
    <img src={Img} width={200} height={200} alt="Image Milos Tanaskovic"/>
   </div>
  </div>
 )
}

export default AboutSection
