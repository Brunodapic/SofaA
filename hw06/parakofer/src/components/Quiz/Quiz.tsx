import { Button } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr'
import { useNumberOfQ, useUserName, useHalfHalf } from "../../context/SetingsContext";
import data from '../../data/data.json';
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
    const { halfhalf, sethalfhalf } = useHalfHalf()
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
    


    //funkcija za uklanjanje &lt;p&gt;In this course, you&amp;rsquo;ll learn:&lt;/p&gt;
    var decodeHTML = function (html:string) {
        var txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    };
    

    
    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        ans: string,
    ) => {
        ans == question.results[0].correct_answer ? correctAns() : setGameOver(true)
    };

    function putUserOnBoard() {
        data.scores.push({
            "username": userName ? userName : 'Đetić neznanog junaka',
            "score": numberOfQ ? String(Number(urlParams.get('amount')) - numberOfQ + 1) : '0'
        })
    }

    function correctAns() {
        sethalfhalf(false)
        if (numberOfQ == 1) {
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
        sethalfhalf(false)
        return (
            <div>
                <h1>Game Over</h1>
                <h2>Number of correct answers : {numberOfQ ? Number(urlParams.get('amount')) - numberOfQ : 0}</h2>
                <Button onClick={() => navigate('/')} >Try again</Button>
                <Button onClick={() => navigate('/highscore')} >See scoreboard</Button>

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
        return (
            <S.styledToggleButtonGroup
                color="primary"
                exclusive
                onChange={handleChange}
            >
                {randQst.map((e: any) => {
                    return (
                        <S.styledToggleButton simple={question.type === "boolean"} name="category" key={e} value={e} >{decodeHTML(e)}</S.styledToggleButton>
                    )
                })}
            </S.styledToggleButtonGroup>

        )
    }

    function printCategoris() {
        //ovo je da izbjegnem &lt;p&gt;In this course, you&amp;rsquo;ll learn:&lt;/p&gt i slično
        var decodedQST = decodeHTML(question.results[0].question);
        return (
            <div>
                <S.styledInfo>
                    <h4>{question.results[0].category}</h4>
                    <h4>{question.results[0].difficulty}</h4>
                    <h4>Number of correct answers : {numberOfQ ? Number(urlParams.get('amount')) - numberOfQ : 0}</h4>
                    <S.fitySyled onClick={() => handle5050()} disabled={!fity || (question.results[0].type === "boolean")} working={fity && !(question.results[0].type === "boolean")}>50:50</S.fitySyled>
                </S.styledInfo>
                <S.styledH2Quiz>{decodedQST}</S.styledH2Quiz>
                {halfhalf ?
                    <div>{print5050()}</div>
                    :
                    <div>{printPitanja()}</div>
                }

            </div>

        )

    }
    function handle5050() {
        setFity(false)
        sethalfhalf(true)
    }

    function print5050() {
        return (
            <S.styledToggleButtonGroup
                color="primary"
                exclusive
                onChange={handleChange}
            >
                <S.styledToggleButton simple={false} name="category" key={question.results[0].incorrect_answers[0]} value={question.results[0].incorrect_answers[0]} >{question.results[0].incorrect_answers[0]}</S.styledToggleButton>
                <S.styledToggleButton simple={false} name="category" key={question.results[0].correct_answer} value={question.results[0].correct_answer} >{question.results[0].correct_answer}</S.styledToggleButton>
            </S.styledToggleButtonGroup>

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
                question ?
                    printCategoris() :
                    <>
                        Nope
                    </>}

        </div>
    )
}



