import styled from "styled-components";
import { Button, ToggleButton, ToggleButtonGroup } from '@mui/material';

export const styledToggleButtonGroup = styled(ToggleButtonGroup)`
    padding: '1rem';
    gap: '11px';
    flex-wrap: wrap;
    width: auto; // change based on the need
    height: 150px; // change based on the need
`
export const styledToggleButton = styled(ToggleButton)<{simple?: boolean}>`
    border: 1px white;
    background: #F90;
    border-top: solid 1px #000;
    flex-basis: 50%;
    width: ${props => props.simple? `16rem`:`30rem` };
    padding:5px;
`

export const fitySyled = styled(Button)<{working?: boolean}>`
    border: 1px white;
    background: ${props => props.working? `green`:`red` };
    border-top: solid 1px #000;
    width: 5rem;
    padding:5px;
`

export const styledInfo = styled.div`
    display: 'flex';
    flex-wrap: wrap;

    *{
        margin: 1rem;
        display: inline-block;
    }

`

export const styledH2Quiz = styled.h2`
    padding: 1rem;
    width: 100%;
    text-align:center;
    border-top: 1px solid black;
`