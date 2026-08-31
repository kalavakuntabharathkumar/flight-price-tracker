import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Flight = {
  id: string; airline: string; flight: string; from: string; to: string;
  departure: string; arrival: string; price: number;
};

const sampleFlights: Flight[] = [
  {id:"1",airline:"SkyWays",flight:"SW 201",from:"HYD",to:"BLR",departure:"06:20",arrival:"07:35",price:5200},
  {id:"2",airline:"Aero India",flight:"AI 518",from:"HYD",to:"DEL",departure:"08:10",arrival:"10:35",price:6800},
  {id:"3",airline:"Indigo",flight:"6E 341",from:"BLR",to:"BOM",departure:"11:15",arrival:"12:55",price:4100},
  {id:"4",airline:"SkyWays",flight:"SW 411",from:"DEL",to:"BOM",departure:"14:30",arrival:"16:40",price:5900},
  {id:"5",airline:"Aero India",flight:"AI 702",from:"MAA",to:"HYD",departure:"18:10",arrival:"19:35",price:3600}
];

const slice = createSlice({
  name:"flights",
  initialState:{items:sampleFlights, status:"ready", query:""},
  reducers:{
    setQuery:(s,a:PayloadAction<string>)=>{s.query=a.payload},
    setFlights:(s,a:PayloadAction<Flight[]>)=>{s.items=a.payload}
  }
});
export const {setQuery,setFlights}=slice.actions;
export const store=configureStore({reducer:{flights:slice.reducer}});
export type RootState=ReturnType<typeof store.getState>;