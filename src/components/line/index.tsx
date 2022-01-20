import styled from '@emotion/styled'
import React from 'react'


const LineStyled = styled.div`
height: 2px;
width: 150px;
background: #FF8427;
@media(max-width: 1200px){
    width: 90px;
}
@media(max-width: 820px){
    height: 90px;
    width: 2px;
}
`

const Line = () => {
    return (
        <LineStyled >

        </LineStyled>
    )
}

export default Line
