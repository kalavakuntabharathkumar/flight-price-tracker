# Real-Time Flight Price Tracker

React + TypeScript + Redux dashboard for flight search.

## Run
```bash
npm install
npm run dev
```
Open `http://localhost:55000`.

## Architecture
- Redux stores normalized flight/search state.
- Reselect memoizes filtered-flight derivation.
- Reusable `FlightCard` and `SearchBar` components.
- Webpack production build uses hashed assets and splitChunks.
- `src/api.ts` is an adapter point for a real Aviationstack API key.

The included demo data keeps the repository runnable without exposing credentials.
