import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../store";
import type { RootState } from "../store";

export default function SearchBar(){
  const dispatch=useDispatch();
  const query=useSelector((s:RootState)=>s.flights.query);
  return <div className="search">
    <input value={query} onChange={e=>dispatch(setQuery(e.target.value))} placeholder="Search route, airline or flight..." />
  </div>;
}