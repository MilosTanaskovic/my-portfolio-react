import React from 'react'
// FontAwsomeIcons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faLinkedin, faFacebookMessenger, faWhatsapp, faTelegram, faInstagram, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import {faCopyright, faTrademark} from '@fortawesome/free-solid-svg-icons'
// Global Style
import GlobalStyle from './Components/GlobalStyle';
import './App.css';
// import pages
import Nav from './Components/Nav';
import AboutMe from './Pages/AboutMe';
import MyWork from './Pages/MyWork';
import ContactMe from './Pages/ContactMe';
import ProjectDetails from './Pages/ProjectDetails';
// Router
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
// ScrollTop
import ScrollTop from './Components/ScrollTop';
function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      <GlobalStyle/>
      <ScrollTop/>
      <Nav/>

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.path}>
        <Route path="/" exact>
          <AboutMe />
        </Route>
        <Route path="/work" exact>
          <MyWork />
        </Route>
        <Route path="/work/:id">
          <ProjectDetails
            FontAwesomeIcon={FontAwesomeIcon}
            faCopyright={faCopyright}
            faTrademark={faTrademark}
          />
        </Route>
        <Route path="/contact">
          <ContactMe
            FontAwesomeIcon={FontAwesomeIcon}
            faFacebookF={faFacebookF}
            faLinkedin={faLinkedin}
            faFacebookMessenger={faFacebookMessenger}
            faWhatsapp={faWhatsapp}
            faTelegram={faTelegram}
            faInstagram={faInstagram}
            faGithub={faGithub}
            faStackOverflow={faStackOverflow}
          />
        </Route>
       </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
