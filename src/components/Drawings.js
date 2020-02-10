import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import { fetchDrawings, createDrawing } from '../service/drawingService';
import { deletePoints } from '../service/pointService';
import Drawing from './Drawing';

function Drawings() {
   const [drawings, setDrawings] = useState(null);
   const [selectedDrawing, setSelectedDrawing] = useState(null);

   if (!drawings) {
      fetchDrawings("1").then((drawings) => {
         setSelectedDrawing(drawings[0]);
         setDrawings(drawings);
      });
   }

   const createNewDrawing = () => {
      createDrawing({
         name: 'New Drawing',
         userId: '1'
      }).then((newDrawing) => {
         setDrawings([...drawings, newDrawing]);
      });
   }

   const clearDrawing = () => {
      deletePoints(selectedDrawing.id).then(() => {
         let idx = drawings.findIndex((drawing) => drawing === selectedDrawing);
         drawings.splice(idx, 1, {
            ...selectedDrawing,
            points: []
         });
         setSelectedDrawing(drawings[idx]);
      });
   }

   return (
      <div>
         <Row>
            <Col xs={3}>
               Drawings
               {
                  drawings && drawings.map((drawing) => {
                     return (
                        <Button variant={
                           selectedDrawing === drawing ? 'primary' : 'secondary'
                        }
                           key={drawing.id}
                           className="w-100 mt-2"
                           onClick={() => setSelectedDrawing(drawing)}
                        >
                           {drawing.name || '(no name)'}
                        </Button>
                     )
                  })
               }
               <hr />
               <Button variant="success" className="w-100" onClick={createNewDrawing}>New Drawing</Button>
            </Col>
            <Col xs={6} className="mt-2">
               <div>
                  {selectedDrawing && <Drawing drawing={selectedDrawing}></Drawing>}
               </div>
            </Col>
            <Col xs={3} className="mt-2">
               <Button variant="danger" className="w-100" onClick={clearDrawing}>Clear Drawing</Button>
            </Col>
         </Row>
      </div>
   );
}

export default Drawings;