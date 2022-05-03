import styled from "styled-components";
import { Button, ToggleButton, ToggleButtonGroup } from '@mui/material';

export const styledH1board = styled.h1`
    padding: 1rem;
    width: auto;
    text-align:center;
`

export const board = styled.div`
display: 'flex';
    flex-wrap: wrap;
    padding: 1rem;
    width: auto;
    text-align:center;
    border: 1px black solid;
    h1{
        display: inline;
    }
`