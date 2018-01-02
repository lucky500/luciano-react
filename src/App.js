import React, { Component } from 'react';
import {Row} from 'react-bootstrap';

import Contact from './components/Contact';
import Projects from './components/Projects';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Contact />
          <Projects />
        </Row>
      </div>
    );
  }
}

export default App;
