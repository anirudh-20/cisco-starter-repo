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
  return(
    <div className={`Card ` + pickRandom(cardThemes)}>
      <div className="title">{name}</div>
      <div className="content">{value} {metric}</div>
    </div>
  )
}