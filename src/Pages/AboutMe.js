import React from 'react'
// import components
import AboutSection from '../Components/AboutSection';
import AboutServices from '../Components/AboutServices';
import AboutFAQ from '../Components/AboutFAQ';
// animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
const AboutMe = () => {
 return (
  <motion.div 
  variants={pageAnimation}
  initial="hidden"
  animate="show"
  exit="exit"
  >
   <AboutSection />
   <AboutServices />
   <AboutFAQ />
  </motion.div>
 )
}

export default AboutMe
