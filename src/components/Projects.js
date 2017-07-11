import React, {Component} from 'react';
import {Col, Accordion, Panel, Well } from 'react-bootstrap';
import Data from '../data/data.json';

class Projects extends Component {
	constructor(props){
		super(props);
		this.state = {
			Data: Data
		};
	}

	renderList(projectLinks){
		let self = this;
		return projectLinks.map(function(link) {
			return <Panel header={link.title} eventKey={link.title} key={link.title}>
	      			<p>{link.description}</p>
	      			<a href="#">{link.urlDemo}</a><br />
	      			<a href="#">{link.urlCode}</a>
	    			</Panel>
		});
	}

	render(){
		return(
			<Col xs={12} md={6} lg={6} className="right-col">
				<Accordion>
					{this.renderList(Data.projectLinks)}
  			</Accordion>
			</Col>
		)
	}
}

export default Projects;