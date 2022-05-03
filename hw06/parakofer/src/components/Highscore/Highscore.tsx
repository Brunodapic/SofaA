import * as React from 'react';
import data from '../../data/data.json';


export default function Highscore() {


    console.log(data)

    function printHighscores(){
        data.scores.sort((a, b) => (b.score > a.score) ? 1 : -1)
        return(
            <>
                {data.scores.map((e: any) => {
                    return (
                        <h1 id={e.username+Math.random()}>{e.username} : {e.score}</h1>
                    )
                })}
            </>
        )
        
    }

    return (
        <div>
            Highscore:
            {printHighscores()}
        </div>
    )
}

