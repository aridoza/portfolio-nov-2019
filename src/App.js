import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Introduction from './components/Introduction';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar>
            <Contact />
          </Sidebar>
            <div id="colorlib-main">
              <Introduction></Introduction>
              <About></About>
              <Projects></Projects>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
