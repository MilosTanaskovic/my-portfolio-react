import React from 'react'
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
function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      <GlobalStyle/>
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
          <ProjectDetails/>
        </Route>
        <Route path="/contact">
          <ContactMe />
        </Route>
       </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
