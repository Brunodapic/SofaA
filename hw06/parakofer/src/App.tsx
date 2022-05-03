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
import Username from './components/Username/Username'
import * as S from './components/mainStyles'

import { SetingsContext, UserNameContex,JokersContex } from './context/SetingsContext';



//@ts-ignore
const fetcher = (...args) => fetch(...args).then(res => res.json())
const swrConfig: SWRConfiguration = { fetcher }


function App() {
  const [numberOfQ, setNumberOfQ] = useState<number>(0);
  const [userName, setUserName] = useState<string>('undifined')
  const [halfhalf,sethalfhalf]=useState<boolean>(false)
  const updateName = (num: number): void => {
    setNumberOfQ(num)
  }


  return (
    <SWRConfig value={swrConfig}>
      <SetingsContext.Provider value={{ numberOfQ, setNumberOfQ }}>
        <UserNameContex.Provider value={{ userName, setUserName }}>
        <JokersContex.Provider value={{ halfhalf, sethalfhalf }}>

          <Router>
            <S.bodyDiv>
              <S.mainStyleDiv>
                <NavBar />
                <Routes>
                  <Route path='/' element={userName == 'undifined' ? <Username /> : <Home />} />
                  <Route path='/quiz' element={userName == 'undifined' ? <Username /> : <Quiz />} />
                  <Route path='/highscore' element={<Highscore />} />
                  <Route path='/username' element={<Username />} />

                </Routes>

              </S.mainStyleDiv>
            </S.bodyDiv>
          </Router>

          </JokersContex.Provider>
        </UserNameContex.Provider>
      </SetingsContext.Provider>

    </SWRConfig>

  );
}

export default App;
