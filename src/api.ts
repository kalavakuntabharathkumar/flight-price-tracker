import type { Flight } from "./store";

/*
  Aviationstack adapter.
  Set VITE/webpack environment values in a production app and map the
  provider response to the Flight model below.
*/
export async function searchFlights(from:string,to:string):Promise<Flight[]> {
  // Demo-safe fallback keeps the project runnable without exposing an API key.
  const base = [
    ["SkyWays","SW 201",from || "HYD",to || "BLR",5200],
    ["Aero India","AI 518",from || "HYD",to || "DEL",6800],
    ["Indigo","6E 341",from || "BLR",to || "BOM",4100]
  ];
  return base.map((x,i)=>({id:`api-${i}`,airline:x[0] as string,flight:x[1] as string,from:x[2] as string,to:x[3] as string,departure:"08:30",arrival:"10:20",price:x[4] as number}));
}