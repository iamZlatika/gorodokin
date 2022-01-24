import styled from '@emotion/styled'
import React from 'react'
import SocialNetItem from './social-net-item'

interface SocialNetItemsProps {
    colorScreen: string;
    colorMobile?: string;
    directionScreen?: string;
    directionMobile: string;
    className?: string;
    positionScreen: string;
    positionMobile: string;
    element: string
}

const NetItems = styled.ul<SocialNetItemsProps>`
z-index: 5;
display: flex;
flex-direction: ${(props) => (props.directionScreen === "row" ? "row" : "column")};
/* width: 90%; */
margin-left: auto;
margin-bottom: 156px;
bottom: 10px;
position: ${(props) => (props.positionScreen === "absolute" ? "absolute" : "static")};
    @media(max-width: 820px){        
        bottom: ${(props)=> (props.element === "showcase" ? `-450px` : `-250px`)};
        left: 80%;
        flex-direction: ${(props) => (props.directionMobile === "row" ? "row" : "column")}}
        position: ${(props) => (props.positionMobile === "absolute" ? "absolute" : "static")}

`

const SocialNetItems: React.FC<SocialNetItemsProps> = ({ colorScreen, colorMobile, directionScreen, positionScreen, positionMobile, directionMobile, element }) => {
    return (
        <NetItems
            element={element}
            directionMobile={directionMobile}
            directionScreen={directionScreen}
            positionScreen={positionScreen}
            positionMobile={positionMobile}
            colorScreen={colorScreen}
            colorMobile={colorMobile}>
            <SocialNetItem
                colorScreen={colorScreen}
                colorMobile={colorMobile}
                direction={directionScreen}
                element={element} />
        </NetItems>
    )
}

export default SocialNetItems
