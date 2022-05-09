import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useUserName } from "../../context/SetingsContext";
import { Button } from '@mui/material';
import * as S from './styles'

export default function Username() {
  const [inputUserName, setInputUserName] = React.useState<string>('user' + String(1 + Math.random() * (10000 - 1)))
  const { setUserName } = useUserName()


  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputUserName(event.target.value);
  };

  function enteredUsername() {
    setUserName(inputUserName)
  }
  return (
    <S.styledBox
    >
      <label>Enter username:</label>
      <S.styledTextField onChange={handleChange} id="usernameInput"  variant="standard" defaultValue='undifined' />
      <S.styledSubmitName onClick={() => enteredUsername()}>Enter username</S.styledSubmitName>
    </S.styledBox>
  )
}


