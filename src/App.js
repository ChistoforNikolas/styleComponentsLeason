import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
import Button from './components/Button';
import Console from './components/Console';
import Flex from './components/Flex';
import Title from './components/Title';
import Themebutton from './ThemeButton';

//Dark or Ligth

import styled, {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme } from "./components/Themes"
import { GlobalStyles } from './components/Globalstyles';

const AppWrapper = styled.div`
width: 100%;
min-height: 100vh;
padding: 2rem;
/* background: black; */
color: greenyellow;
`


function App() {

  //Dark or Ligth

  let localStorageThemeState = localStorage.getItem('Theme');

   useEffect(() => {
    (async()=>{
      await themeToggler()
    })()
  }, [localStorageThemeState])

  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <>
    <GlobalStyles/>
    <AppWrapper> 
    <button onClick={themeToggler}>Switch Theme</button>
      <Flex align="center" direction="column">
        <Title >
          Style Components App
        </Title>
      Font font-family Consolas
      <Console />
      <Button primary color={'#1a3676'} background={'#e9e985'}>Log</Button>
      <Button outline color={'red'} border={'green'}>SEND</Button>
      <Themebutton/>
      </Flex>
    </AppWrapper>
    </>
    </ThemeProvider>
  );
}

export default App;
