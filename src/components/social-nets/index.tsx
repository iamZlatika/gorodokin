import styled from '@emotion/styled'
import React from 'react'
import SocialNetItem from './social-net-item'

interface SocialNetItemsProps {
    color: string;
    direction?: string;
    className?: string;
    position: string;
}

const NetItems = styled.ul<SocialNetItemsProps>`
z-index: 10;
display: flex;
flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};
width: 90%;
margin-left: auto;
margin-bottom: 156px;
position: ${(props) => (props.position === "absolute" ? "absolute" : "static")};
@media(max-width: 820px){}
bottom: -100px;
left: 85%;
`

const SocialNetItems: React.FC<SocialNetItemsProps> = ({ color, direction, position }) => {
    return (
        <NetItems direction={direction} position={position} color={color}>
            <SocialNetItem color={color} />
        </NetItems>
    )
}

export default SocialNetItems
