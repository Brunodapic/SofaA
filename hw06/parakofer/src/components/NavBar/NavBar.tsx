import { Button } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserName } from '../../context/SetingsContext';
import * as S from './styles'


export default function NavBar() {
    const navigate = useNavigate();
    const { userName } = useUserName()

    return (
        <S.navigationBar>

            <Button onClick={() => navigate('/')} >Start Quiz</Button>
            <Button onClick={() => navigate('/highscore')} >Highscore</Button>
            <S.usernameDisplayDiv onClick={() => navigate('/username')}>
                <h3>{userName}</h3>
            </S.usernameDisplayDiv>


        </S.navigationBar    >
    )
}
