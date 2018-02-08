import React, {Component} from 'react';
import {Col, Collapse, ListGroup, ListGroupItem } from 'reactstrap';
import Data from '../data/data.json';

class Projects extends Component {
	constructor(props){
		super(props);
		this.state = {
			Data: Data,
			collapse: false
		};
		this.handleToggle = this.handleToggle.bind(this);
	}

	handleToggle() {
		this.setState({ collapse: !this.state.collapse });
	}

	// render(){
	// 	return(
	// 		<ListGroup>
 //        <ListGroupItem>Cras justo odio</ListGroupItem>
 //        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
 //        <ListGroupItem>Morbi leo risus</ListGroupItem>
 //        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
 //        <ListGroupItem>Vestibulum at eros</ListGroupItem>
 //      </ListGroup>
	// 	)
	// }

	renderList(projectLinks){
		return projectLinks.map(function(link) {
			return <ListGroupItem header={link.title} key={link.title} onClick={this.handleToggle}>
						<Collapse isOpen={this.state.collapse}>
							<p>{link.description}</p>
	      			<img src={link.image} className="img-thumbnail" alt="project thumbnail"/><br />
							  { link.urlDemo ? <a href={link.urlDemo}>Demo </a> : null }
	      			<a href={link.urlCode}>Code </a>
						</Collapse>
	    		</ListGroupItem>
		});
	}

	render(){
		return(
			<Col xs={12} md={6} lg={6} className="right-col">
				<h3>Projects</h3>
				<ListGroup handleToggle={this.handleToggle}>
					{this.renderList(Data.projectLinks)}
  			</ListGroup>
			</Col>
		)
	}
}


export default Projects;