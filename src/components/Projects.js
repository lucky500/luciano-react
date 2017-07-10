import React, {Component} from 'react';
import {Col, Button, Collapse, Well} from 'react-bootstrap';

class Projects extends Component {
	constructor(props){
		super(props);
		this.state = {

		};
	}
	render(){
		return(
			<Col xs={12} md={6} lg={6} className="right-col">
				<Button onClick={ ()=> this.setState({ open: !this.state.open })}>
					Project 1
				</Button>
				<Collapse in={this.state.open}>
					<Well>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi architecto maiores adipisci, accusamus aspernatur corrupti hic facilis iure assumenda at? Odit atque, dignissimos dolore modi temporibus error nobis saepe. Minus?
					</Well>
				</Collapse>
			</Col>
		)
	}
}

export default Projects;