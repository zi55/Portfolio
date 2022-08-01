import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Page/Error.js";
import Home from "./Page/Home.js";
import Game from './Page/Game';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
            <Route path="game" element={<Game></Game>}/>
            {/* <Route path="chart" element={<Chart/>}/> */}
            {/* <Route path="cart" element={<Cart></Cart>}></Route> */}
            {/* <Route path="action" element={<JsonDataDisplay></JsonDataDisplay>}></Route> */}
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);