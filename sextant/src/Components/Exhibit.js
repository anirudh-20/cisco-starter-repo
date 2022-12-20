import React from "react";
import Card from "./Card";
import data from "../data";
import './Exhibit.css';

export default function Exhibit () {
  return(
    <div className="Exhibit">
        {
            data.map( (datapoint, index) => (
                <Card
                    key={index}
                    name={datapoint.name}
                    value={datapoint.value}
                    metric={datapoint.metric}
                />
            ))
        }

    </div>
  )
}
