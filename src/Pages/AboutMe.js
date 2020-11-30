import React from 'react'
// import components
import AboutSection from '../Components/AboutSection';
import AboutServices from '../Components/AboutServices';
import AboutFAQ from '../Components/AboutFAQ';
const AboutMe = () => {
 return (
  <div className="about">
   <AboutSection />
   <AboutServices />
   <AboutFAQ />
  </div>
 )
}

export default AboutMe
