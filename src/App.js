import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Introduction from './components/Introduction';
import About from './components/About';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
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
