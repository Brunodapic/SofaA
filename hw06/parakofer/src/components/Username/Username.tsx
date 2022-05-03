import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useUserName } from "../../context/SetingsContext";
import { Button } from '@mui/material';


export default function Username() {
    const [inputUserName,setInputUserName]= React.useState<string>('user'+String(1 + Math.random() * (10000 - 1)))
    const {setUserName}= useUserName()

    
    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputUserName(event.target.value);
    };

    function enteredUsername(){
        setUserName(inputUserName)
    }
    return (
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={handleChange} id="usernameInput" label="Enter username" variant="standard" defaultValue='undifined'/>
      <Button onClick={()=>enteredUsername()}>Enter username</Button>
    </Box>
    )
}


