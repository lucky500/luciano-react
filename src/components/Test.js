import React, { Component } from 'react';
import { Col, Collapse, Button, CardBody, Card, ListGroup, ListGroupItem } from 'reactstrap';
import Data from '../data/data.json';

class Example extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { 
      collapse: false, 
      Data: Data,
      selected: null    
    };
  }

  toggle = (item) => {
    this.setState({ 
      collapse: !this.state.collapse, 
    });
  }

  render() {
    return (
      <Col xs={12} md={6} lg={6} className="right-col">
        <h3>Projects</h3>
        <ListGroup>
          {  Data.projectLinks.map((link) => {
          return  <ListGroupItem key={link.title} onClick={this.toggle}>
            {link.title}
            <Collapse isOpen={this.state.collapse}>
              <p>{link.description}</p>
              <img src={link.image} className="img-thumbnail" alt="project thumbnail"/><br />
                { link.urlDemo ? <a href={link.urlDemo}>Demo </a> : null }
              <a href={link.urlCode}>Code </a>
            </Collapse>
          </ListGroupItem> 
        })
        }
        </ListGroup>
      </Col>
    );
  }
}

export default Example;