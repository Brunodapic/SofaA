import { Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSWRImmutable from 'swr/immutable'
import useSWR, { mutate } from 'swr'
import { useNumberOfQ } from "../../context/SetingsContext";
import data from '../../data/data.json';
import { useUserName } from "../../context/SetingsContext";
import * as S from './styles'



export default function Quiz() {
    const navigate = useNavigate();
    const urlParams = new URLSearchParams(window.location.search);
    const difficulty = urlParams.get('difficulty');
    const category = urlParams.get('category');
    let numberOfQLet = Number(urlParams.get('amount'));
    const token = urlParams.get('TOKEN');
    const [gameOver, setGameOver] = React.useState(false);
    const [gameWon, setGameWon] = useState(false)
    const { userName, setUserName } = useUserName()
    const { numberOfQ, setNumberOfQ } = useNumberOfQ()
    const url = `https://opentdb.com/api.php?amount=1&category=${category}&difficulty=${difficulty}&${token}`
    const { data: question, error, mutate } = useSWR<any>(`${url}`, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })
    const [fity, setFity] = useState(true)


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

    function putUserOnBoard() {
        data.scores.push({
            "username": userName ? userName : 'Đetić neznanog junaka',
            "score": numberOfQ ? String(Number(urlParams.get('amount')) - numberOfQ + 1) : '0'
        })
    }

    function correctAns() {
        if (numberOfQ == 1) {
            console.log("end")
            putUserOnBoard()
            setGameWon(true)
        } else {
            console.log(numberOfQ)
            setNumberOfQ(numberOfQ ? numberOfQ - 1 : 0)
            numberOfQLet = numberOfQLet - 1;
            mutate()
            //window.open(`/quiz?amount=${numberOfQ-1}&category=${category}&difficulty=${difficulty}`);
        }
    }

    function wrongAns() {

        return (
            <div>
                <h1>Game Over</h1>
                <h2>Number of correct answers : {numberOfQ ? Number(urlParams.get('amount')) - numberOfQ : 0}</h2>
                <Button onClick={() => navigate('/')} >Try again</Button>
            </div>
        )
    }


    function printPitanja() {
        if (gameWon) {
            return (
                <div>
                    <h1>Congratulations</h1>
                    <h2>Number of correct answers : {numberOfQ ? Number(urlParams.get('amount')) - numberOfQ + 1 : 0}</h2>
                    <div>
                        <Button onClick={() => navigate('/')} >Try again</Button>
                        <Button onClick={() => navigate('/highscore')} >Look at the highscore</Button>

                    </div>
                </div>
            )
        }
        var qst = question.results[0].incorrect_answers.concat(question.results[0].correct_answer);
        const randQst = randomArrayShuffle(qst)
        console.log(randQst)
        return (
            <S.styledToggleButtonGroup
                color="primary"
                exclusive
                onChange={handleChange}
            >
                {randQst.map((e: any) => {
                    return (
                        <S.styledToggleButton simple={question.type === "boolean"} name="category" key={e} value={e} >{e}</S.styledToggleButton>
                    )
                })}
            </S.styledToggleButtonGroup>

        )
    }

    function printCategoris() {
        console.log(fity && question.type === "boolean")
        console.log(question.type === "boolean")
        console.log(fity)

        return (
            <div>
                <S.styledInfo>
                    <h4>{question.results[0].category}</h4>
                    <h4>{question.results[0].difficulty}</h4>
                    <h4>Number of correct answers : {numberOfQ ? Number(urlParams.get('amount')) - numberOfQ : 0}</h4>
                    <S.fitySyled onClick={()=>handle5050()} disabled={!fity && question.type === "boolean"} working={fity && !(question.type === "boolean")}>50:50</S.fitySyled>
                </S.styledInfo>
                <S.styledH2Quiz>{question.results[0].question}</S.styledH2Quiz>
                <div>{printPitanja()}</div>
            </div>

        )
        
    }
    function handle5050() {
        setFity(false)
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
                question ?
                    printCategoris() :
                    <>
                        Nope
                    </>}

        </div>
    )
}



