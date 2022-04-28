import React from 'react';
import './App.css';
import { SWRConfig, SWRConfiguration } from 'swr';

import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  Routes,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Highscore from './components/Highscore/Highscore'

//@ts-ignore
const fetcher = (...args) => fetch(...args).then(res => res.json())
const swrConfig: SWRConfiguration = { fetcher }


function App() {
  return (
    <SWRConfig value={swrConfig}>
      <Router>
      <div className="App">
        <NavBar/>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/highscore' element={<Highscore />} /> 
        </Routes>


      </div>
      </Router>
    </SWRConfig>

  );
}

export default App;
