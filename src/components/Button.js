import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
border: 1px solid black;
border-radius: 5px;
padding: 8px 25px;
font-size: 18px;
cursor: pointer;
transition: 0.8s;
&:focus{
  outline: none;
}
&:hover{
  border: 1px solid white;
  background: black;
  color: white;
}
`

const Button = (props) => {
  return (
    <StyledButton {...props}/>
  );
};

export default Button;