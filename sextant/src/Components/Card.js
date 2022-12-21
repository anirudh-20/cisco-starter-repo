import React from 'react';
import './Card.css';

const cardThemes = ["Alpine", "Bliss", "Lake", "Peach"];
const pickRandom = (items) => {
    return items[items.length * Math.random() | 0];
}

export default function Card ({
    name,
    value,
    metric
}) {
  const chars = value.toString().length + metric.toString().length;
  return(
    <div className={`Card ` + pickRandom(cardThemes)}>
      <div className="title">{name}</div>
      <div className={`content` + (chars > 15 ? ' lengthy' : '')}>{value} {metric}</div>
    </div>
  )
}