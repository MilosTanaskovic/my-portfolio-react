import React from 'react'
// Global Style
import GlobalStyle from './Components/GlobalStyle';
import './App.css';
// import pages
import Nav from './Components/Nav';
import AboutMe from './Pages/AboutMe';
import MyWork from './Pages/MyWork';
import ContactMe from './Pages/ContactMe';
// Router
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <h1>Dancing With The React!!!</h1>
      <Switch>
        <Route path="/" exact>
          <AboutMe />
        </Route>
        <Route path="/work">
          <MyWork />
        </Route>
        <Route path="/contact">
          <ContactMe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
