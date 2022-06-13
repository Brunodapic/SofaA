import styled from "styled-components";

export const id = styled.h2` 
    padding: 1rem;
    cursor: pointer;
`

export const EventElementDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    border: 1px black solid;
    min-width: 600px;
    div{
        display: flex;
        justify-content: space-around;
        padding: 1rem;
        cursor: pointer;
        height: auto;
    }
`