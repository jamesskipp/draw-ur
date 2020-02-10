import React from 'react';

const height = 6;
const width = 6;

const Point = ({ x, y }) => {
   const left = 'calc(' + x + '% - ' + width / 2 + 'px)';
   const bottom = `calc(${y}% - ${height / 2}px)`;
   return <div style={{
      position: 'absolute',
      left,
      bottom,
      border: '3px solid black',
      borderRadius: '100%'
   }} />
};

export default Point;