import * as React from 'react';
import { Button } from '../../components/Button';
import * as S from './styles'
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {

    const sports=['football','basketball','tennis','esports','handball','volleyball','baseball','motorsport','rugby','darts','cricket','snooker','futsal']
    const router = useRouter()

    return (
        <S.navigationBar>
            SofaScore    

            {sports.map(sport =>{
                return <button key={sport} onClick={() => router.push(`/sport/${sport}/`)}>{sport}</button>
            })}
            <S.usernameDisplayDiv >
                <h3>User</h3>
            </S.usernameDisplayDiv>


        </S.navigationBar    >
    )
}