import React from 'react';
import {Col} from 'react-bootstrap';
import Data from '../data/data.json';

export default props => (
	<Col xs={12} md={6} lg={6} className="left-col">
		Hello
	</Col>
);




/*<Panel header={Data.projectLink.title} eventKey={Data.projectLink.event.key} key={Data.projectLink.event.key}>
  <p>{Data.projectLink.description}</p>
  <a href="#">{Data.projectLink.urlDemo}</a><br />
  <a href="#">Data.projectLink.urlCode}</a>
</Panel>*/