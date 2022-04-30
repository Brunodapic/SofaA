import React, { useEffect, useState } from "react";
import * as S from './styles'
import useSWR from "swr";
import useSWRImmutable from 'swr/immutable'
import { useNavigate } from 'react-router-dom';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Button, TextField, Box, CssBaseline, Container, Typography, Slider, FormHelperText } from '@mui/material';
import { useNumberOfQ } from "../../context/SetingsContext";

const marks = [
    {
        value: 5,
        label: "5"
    },
    {
        value: 10,
        label: "10"
    },
    {
        value: 15,
        label: "15"
    },
    {
        value: 20,
        label: "20"
    },
    {
        value: 25,
        label: "25"
    },
    {
        value: 30,
        label: "30"
    },
    {
        value: 35,
        label: "35"
    },
    {
        value: 40,
        label: "40"
    },
    {
        value: 45,
        label: "45"
    },
    {
        value: 50,
        label: "50"
    }
];



export default function Home() {
    const navigate = useNavigate();
    const [difficulty, setDifficulty] = useState('easy');
    const [category, setCategory] = useState(23);
    const [numberOfQForm, setNumberOfQFrom] = useState(15)
    
    const {numberOfQ, setNumberOfQ} =useNumberOfQ()

    const url = 'https://opentdb.com/api_category.php'
    const { data: categoris, error:caterror } = useSWRImmutable<any>(`${url}`)
    const tokenUrl='https://opentdb.com/api_token.php?command=request'
    const { data: token, error:tokenError } = useSWRImmutable<any>(`${tokenUrl}`)


    if (!categoris) {
        return (<div>Loading...</div>)
    }
    if (!categoris) { // if (error)
        return (<div>An error has occurred...</div>)
    }
    if (categoris) {

        categoris.trivia_categories.map((e: any) =>
            console.log(e))
    }

    function printCategoris() {
        return (
            <ToggleButtonGroup
                color="primary"
                value={category}
                exclusive
                onChange={handleChangeCategory}
                sx={{
                    display: 'flex',
                    padding: '1rem',
                    flexFlow: 'row wrap',
                    gap: '11px',
                }}
            >
                {categoris.trivia_categories.map((e: any) => {
                    return (
                        <ToggleButton name="category" value={e.id} >{e.name}</ToggleButton>
                    )
                })}
            </ToggleButtonGroup>

        )

    }

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newDifficulty: string,
    ) => {
        setDifficulty(newDifficulty);
    };



    const handleChangeCategory = (
        event: React.MouseEvent<HTMLElement>,
        newCat: number,
    ) => {
        setCategory(newCat);
    };

    function valuetext(value: number) {
        setNumberOfQFrom(value);
        setNumberOfQ(value)
        return `${value}`;
    }

    return (
        <S.MatchContainer >
            <div>

                {/*<form
                    onSubmit={(e: React.SyntheticEvent) => {
                        e.preventDefault();
                        console.log(e)
                        const target = e.target as typeof e.target & {
                            numberOfQ: { value: number };
                            difficulty: {value: string};//možda bi bilo bolje enum , ali s enumima ne volim raditi
                            category: { value: number };
                        };
                        const numberOfQ = target.numberOfQ.value; // typechecks!
                        const category = target.category.value;
                        const difficulty = target.difficulty.value;
                        setNumberOfQ(numberOfQ)
                        // etc...
                        console.log(numberOfQ,category,difficulty)
                    }}
                >*/}
                <div>
                    <label>Choose the number of Questions</label>
                    <Slider 
                        name='numberOfQ'
                        defaultValue={15}
                        getAriaValueText={valuetext}
                        max={50}
                        step={1} 
                        valueLabelDisplay="on" 
                        marks={marks}
                        />
                </div>
                <div>
                    <label>Choose the difficulty</label>

                    <ToggleButtonGroup
                        color="primary"
                        value={difficulty}
                        exclusive
                        onChange={handleChange}
                        sx={{
                            display: 'flex',
                            padding: '1rem',
                            flexFlow: 'column nowrap',
                            gap: '11px',
                        }}
                    >
                        <ToggleButton value="easy">Easy</ToggleButton>
                        <ToggleButton value="medium">Medium</ToggleButton>
                        <ToggleButton value="hard">Hard</ToggleButton>
                    </ToggleButtonGroup>
                </div>
                <div>
                    <label>Choose the category</label>

                    {categoris ?
                        printCategoris()
                        :
                        <div>Loading...</div>
                    }
                </div>
                <div>
                    <Button onClick={() => {console.log(numberOfQForm, category, difficulty);
                                           navigate(`/quiz?amount=${numberOfQForm}&category=${category}&difficulty=${difficulty}&TOKEN=${token}`)  }           
                                                        }>Start Quiz </Button>
                </div>
                {/*</form>*/}
            </div>
        </S.MatchContainer>
    )
}