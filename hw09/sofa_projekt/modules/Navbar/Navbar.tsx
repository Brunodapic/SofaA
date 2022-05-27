import * as React from 'react';
import { Button } from '../../components/Button';
import * as S from './styles'
import Link from 'next/link';

export default function NavBar() {

    const sports=['football','basketball','tennis','tabletennis','hockey','esports','handball','volleyball','baseball','motorsport','rugby','darts','cricket','snooker','futsal','badminton']

    return (
        <S.navigationBar>
            SofaScore

            {sports.map(sport =>{
                return <Link key={sport} href={`/sport/${sport}`} >{sport}</Link>
            })}
            <S.usernameDisplayDiv >
                <h3>User</h3>
            </S.usernameDisplayDiv>


        </S.navigationBar    >
    )
}