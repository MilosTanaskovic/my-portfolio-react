import React from 'react'
// import components
import Nav from '../Components/Nav';
import AboutSection from '../Components/AboutSection';
import AboutServices from '../Components/AboutServices';
import AboutFAQ from '../Components/AboutFAQ';
const AboutMe = () => {
 return (
  <div className="about">
   <Nav/>
   <AboutSection />
   <AboutServices />
   <AboutFAQ />
  </div>
 )
}

export default AboutMe
