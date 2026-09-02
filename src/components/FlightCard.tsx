import React from "react";
import type { Flight } from "../store";

export default function FlightCard({flight}:{flight:Flight}) {
  return <article className="card">
    <div><strong>{flight.airline}</strong><span>{flight.flight}</span></div>
    <div className="route"><b>{flight.from}</b><span>→</span><b>{flight.to}</b></div>
    <div className="times"><span>{flight.departure}</span><span>{flight.arrival}</span></div>
    <div className="bottom"><span>Non-stop</span><strong>₹{flight.price.toLocaleString("en-IN")}</strong></div>
  </article>;
}