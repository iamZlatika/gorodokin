import styled from '@emotion/styled'
import React from 'react'
import Button from '../../../components/buttons/Button'



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
