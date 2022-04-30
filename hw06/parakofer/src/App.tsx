import React, { useState } from 'react';
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
import Quiz from './components/Quiz/Quiz'
import { SetingsContext } from './context/SetingsContext';



//@ts-ignore
const fetcher = (...args) => fetch(...args).then(res => res.json())
const swrConfig: SWRConfiguration = { fetcher }


function App() {
  const [numberOfQ, setNumberOfQ] = useState<number>(0);
  const updateName = (num: number): void => {
    setNumberOfQ(num)
  }



  return (
    <SWRConfig value={swrConfig}>
      <SetingsContext.Provider value={{ numberOfQ,setNumberOfQ }}>

        <Router>
          <div className="App">
            <NavBar />

            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/quiz' element={<Quiz />} />
              <Route path='/highscore' element={<Highscore />} />
            </Routes>


          </div>
        </Router>
      </SetingsContext.Provider>

    </SWRConfig>

  );
}

export default App;
