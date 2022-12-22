import React from "react";
import { IPCard, LatencyCard } from "./Card";
import './Exhibit.css';

export default function Exhibit () {
  return(
    <div className="Exhibit">
        <IPCard version="ipv4"/>
        <IPCard version="ipv6"/>
        <LatencyCard/>
    </div>
  )
}
