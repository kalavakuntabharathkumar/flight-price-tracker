import { createSelector } from "reselect";
import type { RootState } from "./store";

const selectFlights=(s:RootState)=>s.flights.items;
const selectQuery=(s:RootState)=>s.flights.query;

export const selectFilteredFlights=createSelector(
  [selectFlights,selectQuery],
  (flights,query)=> {
    const q=query.trim().toLowerCase();
    return q ? flights.filter(f => `${f.from} ${f.to} ${f.airline} ${f.flight}`.toLowerCase().includes(q)) : flights;
  }
);