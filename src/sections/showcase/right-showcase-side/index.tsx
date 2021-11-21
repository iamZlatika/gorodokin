import styled from '@emotion/styled'
import React from 'react'
import showcasePhoto from '../../../images/photo/photo_01.jpg'

const RigthShowcaseWrapper = styled.div`
position: relative;
border-radius: 0px 0px 0px 62px;

img{
height: 708px;
width: 100%;
border-radius: 0px 0px 0px 62px;
object-fit: cover;
position: relative;

}
h2{
    display: block;
    position: absolute;
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
    user-select: none;   
    bottom: 78px;
    left: 50px;
}
h3{
    display: block;
    position: absolute;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    user-select: none;   
    bottom: 51px;
    left: 50px;
}
`

const RightShowcase = () => {


    return (

        <RigthShowcaseWrapper>
            <img src={showcasePhoto} alt="Антон Городокин" />
            <h2>Антон Городокин</h2>
            <h3>Психиатр MD PhD</h3>
        </RigthShowcaseWrapper>
    )
}

export default RightShowcase
