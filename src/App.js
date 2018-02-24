import React, { Component } from 'react';
import { Row } from 'reactstrap';
import images from './data/data1.json';

import Contact from './components/Contact';
import Project from './components/Projects';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Contact />
          <Project images={images.projectLinks} />
        </Row>
      </div>
    );
  }
}

export default App;
