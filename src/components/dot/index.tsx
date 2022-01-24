import styled from '@emotion/styled'
import React from 'react'

const DotStyled = styled.div`
background: #FF8427;
width: 34px;
height: 34px;
border-radius: 50%;
box-sizing: border-box;
transform: translateY(-16px);
transform: translateX(0);
@media(max-width: 820px){
    transform: translateY(0);
    transform: translateX(-16px);
}
`

const Dot = () => {
    return (
        <DotStyled>
        </DotStyled>
    )
}

export default Dot
