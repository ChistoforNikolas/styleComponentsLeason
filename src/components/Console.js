import React, { useState } from "react";
import styled from "styled-components";
import Flex from "./Flex";
import Line from "./Line";

const StyledConsole = styled.textarea`
width: 100%;
height: 70vh;
background: black;
margin-top: 1vh;
font-size: 14px;
border: none;
color: ${props => props.color || props.theme.colors.primary};
resize: none;
&:focus{
  outline: none;
}
@media ${props => props.theme.media.phone} {
  border: 1px solid red;
}@media ${props => props.theme.media.tablet} {
  border: 1px solid green;
}
`

const Console = ({color, ...props}) => {
  const [lines, setLines] = useState(['C/users/Chisto4_Dev>'])

  const onKeyPress = e => {
    if(e.charCode == 13){
      setLines([...lines, 'C/users/Chisto4_Dev>'])
    }
  }
  return (
    <Flex width="100%">
      <Flex direction={"column"} margin="1vh 10px">
        {lines.map(line => 
          <Line color={color}>{line}</Line>)}
      </Flex>
      <StyledConsole onKeyPress={onKeyPress} colo={color} {...props}/>
    </Flex>
  );
};

export default Console;