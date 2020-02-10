import React from 'react';

import Points from './Points';
import { Row, Col } from 'react-bootstrap';

function Drawing({ drawing }) {

   return (
      <Row>
         <Col className="mt-2">
            <Points height={400} width={400} drawing={drawing}></Points>
         </Col>
      </Row>
   );
}

export default Drawing;