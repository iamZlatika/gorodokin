import styled from '@emotion/styled'
import React from 'react'

interface ArrowProps {
    direction: string
    color: string
    className: string
}

const ArrowStyled = styled.div<ArrowProps>`
height: 36px;
min-width: 36px;
border-color: ${(props) => (props.color === "white" ? "#fff" : "#0E402D")};
border: 1px solid;
border-radius: 50%;
background-color: ${(props) => (props.color === "white" ? "#0E402D" : "#fff")};
cursor: pointer;
display: flex;
    justify-content: center;
    align-items: center;
div{
    clip-path: ${(props) => (props.direction === "right" ? "polygon(100% 50%, 0 0, 0 100%);" : "polygon(100% 100%, 100% 0, 0 50%);")};
    background-color: ${(props) => (props.color === "white" ? "#fff" : "#0E402D")};
    width: 14px;
    height: 14px;
   
}
`

const Arrow: React.FC<ArrowProps> = ({ direction, color, className }) => {
    return (
        <ArrowStyled
            color={color}
            direction={direction}
            className={className}
        >
            <div></div>
        </ArrowStyled>
    )
}

export default Arrow
