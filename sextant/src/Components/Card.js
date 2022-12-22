import React, { useRef, useEffect, useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
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

export function LatencyCard () {
    const [latency, setLatency] = useState(0);
    const ws = useRef(null);

    useEffect(() => {
        ws.current = new W3CWebSocket("ws://localhost:55455");
        ws.current.onopen = () => {
            console.log('WebSocket Connected');
        };
        ws.current.onerror = (err) => {
            console.log(`Connection Error: ${err.message}`);
        };
        ws.current.onclose = () => {
            console.log(`WebSocket Connection Closed`);
        };
        let currentSocket = ws.current;
        return () => {
            currentSocket.close();
        }
    }, [])

    useEffect(() => {
        if (ws.current == null) return;
        ws.current.onmessage = (msg) => {
            let startTime = msg.data;
            let endTime = new Date().getTime();
            setLatency(endTime - startTime);
        };
    }, [latency])
    
    return(
        <Card
            name={"Latency"}
            value={latency}
            metric="ms"
        />
    )
}