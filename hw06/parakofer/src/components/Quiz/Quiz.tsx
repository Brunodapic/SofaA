import { Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSWRImmutable from 'swr/immutable'
import { string } from 'yup';
import useSWR, { mutate } from 'swr'
import { useNumberOfQ } from "../../context/SetingsContext";



export default function Quiz() {
    const navigate = useNavigate();
    const urlParams = new URLSearchParams(window.location.search);
    const difficulty=urlParams.get('difficulty');
    const category=urlParams.get('category');
    let numberOfQLet  = Number(urlParams.get('amount'));
    const token=urlParams.get('TOKEN');
    const [gameOver, setGameOver] = React.useState(false);
    const [gameWon, setGameWon]=useState(false)

    const {numberOfQ, setNumberOfQ} =useNumberOfQ()
    const url = `https://opentdb.com/api.php?amount=1&category=${category}&difficulty=${difficulty}&${token}`
    const { data: question, error,mutate } = useSWR<any>(`${url}`,{
        revalidateIfStale: true,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
      })


    if (!question && !error) {
        return (<div>Loading...</div>)
    }
    if (!question) { // if (error)
        return (<div>An error has occurred...</div>)
    }
    if (question) {

        question.results.map((e: any) =>
            console.log(e))
    }


    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        ans: string,
    ) => {
        console.log(ans);
        ans == question.results[0].correct_answer ? correctAns() : setGameOver(true)
    };

    function correctAns() {
        if (numberOfQ == 1) {
            console.log("end")
            setGameWon(true)
        } else {
            console.log(numberOfQ)
            setNumberOfQ(numberOfQ? numberOfQ-1 : 0)
            numberOfQLet=numberOfQLet-1;
            mutate()
            //window.open(`/quiz?amount=${numberOfQ-1}&category=${category}&difficulty=${difficulty}`);
        }
    }

    function wrongAns() {
        
        return(
            <div>
                <h1>Game Over</h1>
                <h2>Number of correct answers : {numberOfQ?Number(urlParams.get('amount'))-numberOfQ:0}</h2>
            </div>
        )
    }


    function printPitanja() {
        if(gameWon){
            return(
                <div>
                <h1>Congratulations</h1>
                <h2>Number of correct answers : {numberOfQ?Number(urlParams.get('amount'))-numberOfQ:0}</h2>
            </div>
            )
        }
        var qst = question.results[0].incorrect_answers.concat(question.results[0].correct_answer);
        const randQst = randomArrayShuffle(qst)
        console.log(randQst)
        return (
            <ToggleButtonGroup
                color="primary"
                exclusive
                sx={{
                    display: 'flex',
                    padding: '1rem',
                    flexFlow: 'row wrap',
                    gap: '11px',
                }}
                onChange={handleChange}
            >
                {randQst.map((e: any) => {
                    e=e.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
                    return (
                        <ToggleButton name="category" key={e} value={e} >{e}</ToggleButton>
                    )
                })}
            </ToggleButtonGroup>

        )
    }

    function printCategoris() {
        return (
            <div>
                <p>{question.results[0].category}</p>
                <p>{question.results[0].difficulty}</p>
                <p>{question.results[0].question}</p>
                <div>{printPitanja()}</div>




            </div>

        )

    }
    function randomArrayShuffle(array: any[]) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    return (
        <div>
            {gameOver ?
                <>
                    {wrongAns()}
                </>
                :
                question ? printCategoris() :
                    <>
                        Nope
                    </>}

        </div>
    )
}


