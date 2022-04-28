import React, { useEffect } from "react";
import * as S from './styles'
import useSWR from "swr";
import useSWRImmutable from 'swr/immutable'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function Home() {
    const navigate = useNavigate();

    const url = 'https://opentdb.com/api_category.php'
    const { data, error } = useSWRImmutable<any>(`${url}`)
    
    if (!data && !error) {
        return (<div>Loading...</div>)
    }
    if (!data) { // if (error)
        return (<div>An error has occurred...</div>)
    }
    if(data)
    {

        data.trivia_categories.map((e:any)=>
        console.log(e))
    }

    return(
        <S.MatchContainer >
            <div>
             {data.trivia_categories.map((e:any)=>{
                return(
                    <Button key={e.id} onClick={() => navigate(`/${e.id}`)} >{e.name}</Button>
                )})}
            </div>
        </S.MatchContainer>
    )
}