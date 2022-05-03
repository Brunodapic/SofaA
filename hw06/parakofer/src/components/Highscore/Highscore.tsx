import * as React from 'react';
import data from '../../data/data.json';
import * as S from './styles'


export default function Highscore() {


    console.log(data)
    let row=1
    function printHighscores(){
        data.scores.sort((a, b) => (b.score > a.score) ? 1 : -1)
        return(
            <>
                {data.scores.map((e: any) => {
                    return (
                        <S.board>
                        <h1>{row++}. </h1>
                        <h1>{e.username}</h1>
                        <h1> : {e.score}</h1>
                        </S.board>
                    )
                })}
            </>
        )
        
    }

    return (
        <div>
            <S.styledH1board>Highscore:</S.styledH1board>
            {printHighscores()}
        </div>
    )
}

