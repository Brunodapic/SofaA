import styled from "styled-components";

export const navigationBar = styled.div`
    display: flex;
    justify-content: center;
    border: 2px solid white;
    padding: 30px;
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
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        margin: 0;
        min-height: 28px;
        min-width: 120px;
        padding: 10px 10px;
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

export const usernameDisplayDiv = styled.div` 
    margin-left: auto;
    display: flex;
    justify-content: center;
    border: 1px solid;
    padding: 1rem;
    right: 2rem;
    color: white;
    cursor: pointer;
`