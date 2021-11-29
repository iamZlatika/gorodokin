import styled from '@emotion/styled'
import React from 'react'
import Button from '../../../components/buttons/Button'
// import media from 'emotion-media-query';


const breakpoints: {
    [index: string]: number
 } = {
    sm: 500,
    md: 768,
    lg: 992,
    xl: 1200,
 };



const LeftShowcaseWrapper = styled.div`
display: flex;
flex-direction: column;

div{
    margin-left: 0;
    h2{
        font-size: 80px;
        line-height: 94px;
        text-transform: uppercase;
        margin-top: 156px;
        user-select: none;
        @media(max-width: 1200px){
    div{
        h2{
            font-size: 64px;
        }
    }
} 
    }
    h3{
        font-weight: 300;
        font-size: 20px;
        line-height: 23px;
        user-select: none;
        mask-type: 14px;
        margin-bottom: 67px;

    }
}

@media(max-width: 1200px){
    div{
        h2{
            font-size: 60px;
        }
    }
} 
`
const LeftShowcase = () => {

    const onClick = () => {
        console.log("first btn clicked")
    }
    return (
        <LeftShowcaseWrapper>
            <LeftShowcaseWrapper>
                <h2>Антон Городокин</h2>
                <h3>Помогу найти выход из ситуации, которая вас беспокоит</h3>
                <Button
                    onClick={onClick}
                    label="Записаться на прием"
                    color="default" />
            </LeftShowcaseWrapper>
           
        </LeftShowcaseWrapper>
    )
}

export default LeftShowcase
