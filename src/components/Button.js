import React from "react";
import styled, {css, keyframes} from "styled-components";

const rotateAnimatios = keyframes`
0%{
  transform: rotateZ(0deg);
}
100%{
  transform: rotateZ(360deg);
}
`

const StyledButton = styled.button`
border: 1px solid black;
border-radius: 10px;
padding: 8px 25px;
font-size: 18px;
cursor: pointer;
transition: 0.8s;
margin-bottom: 5px;
&:focus{
  outline: none;
};
/* &:hover{
  border: 1px solid white;
  background: black;
  color: white;
}; */
&:hover{
  animation: ${rotateAnimatios} 1s infinite linear;
};
${props => props.primary && css `
  color: ${props => props.color || 'white'};
  background: ${props => props.background || 'white'};
`};
${props => props.outline && css `
  color: ${props => props.color || 'white'};
  border: 1px solid ${props => props.color || 'white'};
  background: transparent};
`}
`
const Button = (props) => {
  return (
    <StyledButton {...props}/>
  );
};

export default Button;