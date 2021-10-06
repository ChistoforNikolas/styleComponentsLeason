import React from "react";
import styled from "styled-components";

const StyledConsole = styled.textarea`
width: 100%;
height: 70vh;
background: black;
margin-top: 1vh;
font-size: 14px;
border: none;
color: ${({color}) => color || 'white'};
resize: none;
&:focus{
  outline: none;
}
`

const Console = (props) => {
  return (
    <StyledConsole {...props}/>
  );
};

export default Console;