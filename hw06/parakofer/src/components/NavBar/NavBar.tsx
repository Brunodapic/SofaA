import { Button } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';


export default function NavBar() {
    const navigate = useNavigate();
    return (
        <div>
            <Button onClick={() => navigate('/')} >Home</Button>
            <Button onClick={() => navigate('/highscore')} >Highscore</Button>

        </div>
    )
}
