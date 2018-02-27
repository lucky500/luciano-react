import React from 'react';
import { Col } from 'reactstrap';


export default props => (
	<Col xs={12} md={6} lg={6} className="left-col">
		<div>
			<h3>Luciano Oliveira</h3>
			<h4>Front End Developer</h4>
			<a href="https://twitter.com/luciano_wor" target="_blank">
				<i className="fab fa-twitter fa-lg"></i>
			</a>
			<a href="https://github.com/lucky500" target="_blank">
				<i className="fab fa-github fa-lg"></i>
			</a>
			<a href="https://www.linkedin.com/in/luciano-oliveira-484a8017/" target="_blank">
				<i className="fab fa-linkedin-in fa-lg"></i>
			</a>
			<a href="https://s3.amazonaws.com/resume-luciano/Luciano_Oliveira.pdf" target="_blank">
				<i className="far fa-file-alt fa-lg"></i>
			</a>
		</div>
	</Col>
);
