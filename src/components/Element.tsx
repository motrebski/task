import React from 'react';
import { HomeTypes }  from "../types/home";

interface ElementProps {
  item: HomeTypes.ElementProperty
}

export const Element = ({
  item
}: ElementProps) => {

  return(
    <g>
      <rect x={item.x-item.boundingBox.width*0.5} y={item.y-item.boundingBox.height*0.5} width={item.boundingBox.width} height={item.boundingBox.height} strokeWidth='2' stroke='#FF0000' fill='none' />
      {(item.type === 'ellipse') && (
        <ellipse cx={item.x} cy={item.y} rx={item.width/2} ry={item.height/2} fill={item.color} transform={`rotate(${item.rotation} ${item.x} ${item.y})`} />
      )}
      {(item.type === 'rectangle') && (
        <rect x={item.x-item.width*0.5} y={item.y-item.height*0.5} width={item.width} height={item.height} fill={item.color} transform={`rotate(${item.rotation} ${item.x} ${item.y})`} />
      )}
      <circle cx={item.x} cy={item.y} r='3' fill='white' />
      <text x={item.x + 5} y={item.y} fill='white'>{`${item.rotation}°`}</text>
    </g>
  );
}
