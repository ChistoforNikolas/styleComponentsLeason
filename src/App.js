import React from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import Console from './components/Console';
import Flex from './components/Flex';
import Title from './components/Title';

const AppWrapper = styled.div`
width: 100%;
min-height: 100vh;
padding: 2rem;
background: black;
color: greenyellow;
`


function App() {
  return (
    <AppWrapper> 
      <Flex align="center" direction="column">
        <Title color={"green"}>
          Style Components App
        </Title>
      Font font-family Consolas
      <Console/>
      <Button>Log</Button>
      </Flex>
    </AppWrapper>
  );
}

export default App;
