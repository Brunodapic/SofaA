import styled from "styled-components";
import { ChangeEvent, useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const Switch = styled.div`
  position: relative;
  width: 60px;
  height: 28px;
  background: black;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: gray;
    transform: translate(0, -50%);
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    background: white;

    &:before {
      transform: translate(32px, -50%);
    }
  }
`;

export default function ToggleSwitch() {

    const {darkMode,setDarkMode}=useDarkMode()
    const [checked, setChecked] = useState(true);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
        setDarkMode(!darkMode)
    };

    return (
        <Label>
            <span>Dark Mode is {checked ? "on" : "off"}</span>
            <Input checked={checked} type="checkbox" onChange={handleChange} />
            <Switch />
        </Label>
    );
}