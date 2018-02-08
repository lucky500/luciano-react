import React, { Component } from 'react';
import { Row } from 'reactstrap';

import Contact from './components/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Contact />
        </Row>
      </div>
    );
  }
}

export default App;
