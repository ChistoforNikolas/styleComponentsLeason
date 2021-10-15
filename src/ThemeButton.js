import React, { useState } from 'react';
import styled from "styled-components";

const StyledThemeBuutton = styled.button`
  border: 1px solid red;
  background: none;
  color: red;
  font-size: 12px;
  padding: 5px 10px ;
  position: absolute;
  right: 10px;
  top: 10px;
  border-radius: 10px;
  transition: 1s;
  &:hover{
    color: white;
    background: black;
  }
`



const Themebutton = () => {

  let [titleButton, setTitleButton] = useState('Light Mode');

  const DarkOrLigthModeLocalStorage = () => {
  let localStorageThemeState = localStorage.getItem('Theme');

  if(localStorageThemeState){
    return localStorage.removeItem('Theme'), setTitleButton('Light Mode'), console.log('ThemeState :>> ', titleButton);;
  } 
  else {
    return localStorage.setItem('Theme', 'true'), setTitleButton('Dark Mode'), console.log('ThemeState :>> ', titleButton);
  }
  };

  return (
    <StyledThemeBuutton onClick ={() => DarkOrLigthModeLocalStorage()}>
      {titleButton}
    </StyledThemeBuutton>
  );
}

export default Themebutton;
