import * as React from 'react';
import { Button } from '../../components/Button';
import * as S from './styles'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ToggleSwitch from '../../components/ToggleSwitch';
import { useDarkMode } from '../../context/DarkModeContext';

export default function NavBar() {

    const sports = ['football', 'basketball', 'tennis', 'esports', 'handball', 'volleyball', 'baseball', 'motorsport', 'rugby', 'darts', 'cricket', 'snooker', 'futsal']
    const router = useRouter()
    const { darkMode } = useDarkMode()
    console.log("dark mode ", darkMode)
    
    return (
        <S.navigationBar darkMode={darkMode}>
            
            <div>
            {false?
            <>
            {sports.map(sport => {
                return <button key={sport} onClick={() => router.push(`/sport/${sport}/events`)}>{sport} </button>
            })}
            </>
            :
            <>     
            {sports.map(sport => {
                return <button key={sport} onClick={() => router.push(`/sport/${sport}/events`)}>{sport} </button>
            })}
            </> 
            }
            </div>

            <div>
                <ToggleSwitch/>
            </div>
            
            <div>
                <h3>User</h3>
            </div>


        </S.navigationBar    >
    )
}