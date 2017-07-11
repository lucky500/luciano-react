import React from 'react';
import {Col} from 'react-bootstrap';
import Data from '../data/data.json';
import {Icon} from 'react-fa'

export default props => (
	<Col xs={12} md={6} lg={6} className="left-col">
		<div>
			<h3>Luciano Oliveira</h3>
			<h4>Front End Developer</h4>
			<a href="https://twitter.com/luciano_wor">
				<Icon name="twitter" />
			</a>
			<a href="https://github.com/lucky500">
				<Icon name="github" />
			</a>
			<a href="https://www.linkedin.com/in/luciano-oliveira-484a8017/">
				<Icon name="linkedin" />
			</a>
		</div>
	</Col>
);
