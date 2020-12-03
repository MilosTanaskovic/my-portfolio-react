import React from 'react'
// Global Style
import GlobalStyle from './Components/GlobalStyle';
import './App.css';
// import pages
import AboutMe from './Pages/AboutMe';
function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <h1>Dancing With The React!!!</h1>
      <AboutMe />
    </div>
  );
}

export default App;
