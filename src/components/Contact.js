import React from 'react';
import { Col } from 'reactstrap';


export default props => (
	<Col xs={12} className="left-col">
		<div>
			<h3>Luciano Oliveira</h3>
			<h4>Front End Developer</h4>
			<a href="https://twitter.com/luciano_wor">
				<i className="fab fa-twitter fa-lg"></i>
			</a>
			<a href="https://github.com/lucky500">
			<i className="fab fa-github fa-lg"></i>
			</a>
			<a href="https://www.linkedin.com/in/luciano-oliveira-484a8017/">
			<i className="fab fa-linkedin-in fa-lg"></i>
			</a>
		</div>
	</Col>
);
