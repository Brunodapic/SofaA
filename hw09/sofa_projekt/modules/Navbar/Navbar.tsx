import * as React from 'react';
import { Button } from '../../components/Button';
import * as S from './styles'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ToggleSwitch from '../../components/ToggleSwitch';

export default function NavBar() {

    const sports = ['football', 'basketball', 'tennis', 'esports', 'handball', 'volleyball', 'baseball', 'motorsport', 'rugby', 'darts', 'cricket', 'snooker', 'futsal']
    const router = useRouter()

    const useDeviceDetect = () => {
        const [width, setWidth] = useState(window.innerWidth);
        const handleWindowResize = () => {
            setWidth(window.innerWidth);
        }
    
        useEffect(() => {
            window.addEventListener('resize', handleWindowResize);
            return () => {
                window.removeEventListener('resize', handleWindowResize);
            }
        }, []);
    
        return (width <= 768);
    }
    return (
        <S.navigationBar>

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

            <div>
                <ToggleSwitch/>
            </div>
            
            <S.usernameDisplayDiv >
                <h3>User</h3>
            </S.usernameDisplayDiv>


        </S.navigationBar    >
    )
}