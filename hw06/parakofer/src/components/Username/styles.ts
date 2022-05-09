import styled from "styled-components";
import { Box, Button, TextField } from '@mui/material';


export const styledSubmitName = styled(Button)`
    color: #fff;
    display: flex;
    justify-content: center;
    border: 2px solid white;
    padding: 15px;
    background-color: #0a30a6;
    button {
        background-color: #0a6bff;
        border-radius: 4px;
        border: 0;
        box-shadow: rgba(1,60,136,.5) 0 -1px 3px 0 inset,rgba(0,44,97,.1) 0 3px 6px 0;
        box-sizing: border-box;
        color: #fff;
        cursor: pointer;
        display: inherit;
        font-family: "Space Grotesk",-apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
        font-size: 8px;
        font-weight: 300;
        line-height: 18px;
        margin: 0;
        height: 3rem;
        min-width: 100x;
        
        position: relative;
        text-align: center;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: baseline;
        transition: all .2s cubic-bezier(.22, .61, .36, 1);
    }
    button:hover{
        background-color: #065dd8;
        transform: translateY(-2px);
    }
`
export const styledTextField = styled(TextField)`
    width: '90%';
    padding-left: 1rem;
    padding-right: 1rem;
    margin-Left: 'auto';
    margin-Right: 'auto';            
    padding-Bottom: 0;
    margin-Top: 0;
    font-Weight: 500;
    input: {
    color: 'white'
    }   
`

export const styledBox = styled(Box)`
    display: flex;
    width: '90%';
    margin-Left: 'auto';
    margin-Right: 'auto';            
    padding-Bottom: 0;
    margin-Top: 0;   
    justify-content: center;
    align-items: baseline;


`