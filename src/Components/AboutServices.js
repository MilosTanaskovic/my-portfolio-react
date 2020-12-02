import React from 'react'
// import svg, img
import clock from '../img/About/clock.svg';
import diaphragm from '../img/About/diaphragm.svg';
import money from '../img/About/money.svg';
import teamwork from '../img/About/teamwork.svg';
import home2 from '../img/About/home2.png'

const AboutServices = () => {
 return (
  <div className='about__services'>
   {/* Description Section */}
   <div className="description">
   <h2>
    High <span>quality</span> services
   </h2>
   <div className="cards">
    <div className="card">
     <div className="icon">
      <img src={clock} alt="sevices clock"/>
      <h3>Efficinet</h3>
     </div>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
    </div>
    <div className="card">
     <div className="icon">
      <img src={teamwork} alt="sevices teamwork"/>
      <h3>Teamwork</h3>
     </div>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
    </div>
    <div className="card">
     <div className="icon">
      <img src={diaphragm} alt="sevices diaphragm"/>
      <h3>Diaphragm</h3>
     </div>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
    </div>
    <div className="card">
     <div className="icon">
      <img src={money} alt="sevices money"/>
      <h3>Money</h3>
     </div>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
    </div>
   </div>
   </div>
   {/* Image Section */}
   <div className="image">
    <img src={home2} alt="service programming"/>
   </div>
  </div>
 )
}

export default AboutServices
