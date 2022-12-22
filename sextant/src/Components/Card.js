import React, { useEffect, useState } from 'react';
import { getIPinfo } from '../Services/ipaddr';
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
    const [theme] = useState(pickRandom(cardThemes));
    const chars = value?.toString().length + metric?.toString().length;
    return(
        <div className={`Card ` + theme}>
        <div className="title">{name}</div>
        <div className={`content` + (chars > 15 ? ' lengthy' : '')}>{value} {metric}</div>
        </div>
    )
}

export function IPCard ({ version }) {
    const [IPinfo, setIPinfo] = useState({});

    useEffect(() => {
        getIPinfo(version)
        .then(d => {
            setIPinfo(d);
        });
    }, [version])
    
    return(
        <Card
            name={IPinfo?.name}
            value={IPinfo?.ip}
            metric=""
        />
    )
}