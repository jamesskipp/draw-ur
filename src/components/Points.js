import React, { useState, useEffect } from 'react';

import { createPoint } from '../service/pointService';
import { fetchDrawing } from '../service/drawingService';
import Point from './Point';

function Points({ height, width, drawing }) {
   const [points, setPoints] = useState(null);

   useEffect(() => {
      fetchDrawing(drawing.id).then((drawing) => {
         setPoints(drawing.points);
      }).catch((error) => {
         console.error(error);
      });
   }, [drawing]);

   const onVPClick = (event) => {
      var rect = event.target.getBoundingClientRect();
      var x = event.clientX - rect.left; //x position within the element.
      var y = event.clientY - rect.top;  //y position within the element.

      const point = {
         id: Date.now(),
         userId: "1",
         x: x / width * 100,
         y: (height - y) / height * 100,
         drawingId: drawing.id
      };
      createPoint(point);
      setPoints([...points, point]);
   }

   return (
      <div onClick={onVPClick}
         style={{
            position: 'relative',
            border: '2px solid black',
            height: height + 'px',
            width: width + 'px',
            overflow: 'hidden',
            backgroundColor: 'white'
         }}>
         {
            points && points.map((point) => {
               return <Point key={point.id} x={point.x} y={point.y} />
            })
         }
      </div>
   );
}

export default Points;