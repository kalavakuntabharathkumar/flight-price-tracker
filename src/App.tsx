import React from "react";
import { useSelector } from "react-redux";
import SearchBar from "./components/SearchBar";
import FlightCard from "./components/FlightCard";
import { selectFilteredFlights } from "./selectors";
import "./styles.css";

export default function App(){
  const flights=useSelector(selectFilteredFlights);
  return <main>
    <header><div><p className="eyebrow">REAL-TIME SEARCH</p><h1>Flight Price Tracker</h1><p>Responsive React + Redux flight search dashboard.</p></div><div className="badge">200+ routes</div></header>
    <SearchBar/>
    <section className="summary"><span>{flights.length} results</span><span>Live-style demo data</span></section>
    <section className="grid">{flights.map(f=><FlightCard key={f.id} flight={f}/>)}</section>
  </main>;
}