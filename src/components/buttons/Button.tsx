import styled from '@emotion/styled'
import React from 'react'

const ButtonWrapper = styled.button<Pick<ButtonProps, "color">>`
background: ${(props) => (props.color === "default" ? "#FF8427" : "#fff")};
color: ${(props) => (props.color === "default" ? "#fff" : "#FF8427")};
border: #FF8427 1px solid;
padding: 14px 45px;
font-size: 1rem;
display: block;
box-sizing: border-box;
cursor: pointer;
width: 258px;
border-radius: 75px;
outline: none;

&:hover{
  background: ${(props) => (props.color === "default" ? "#fff" : "#FF8427")};
color: ${(props) => (props.color === "default" ? "#FF8427" : "#fff")};
border: #FF8427 1px solid;


}

`

interface ButtonProps {
  onClick: (e: React.SyntheticEvent) => void,
  color: string,
  label: string
}

const Button: React.FC<ButtonProps> = ({ onClick, color, label }) => {
  return (
    <ButtonWrapper onClick={onClick} color={color}>
      {label}
    </ButtonWrapper>
  )
}

export default Button
