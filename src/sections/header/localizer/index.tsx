import React from 'react'
import styled from "@emotion/styled";

const LocalazerWrapper = styled.div`
display: flex;

`
const LocalizerButton = styled.button`
background-color: transparent;
border: none;
outline: none;
color: #fff;
font-weight: 400;
font-size: 16px;
line-height: 19px;
padding: 3px 12px;

& + button{
    border-left: 1px solid #C4C4C4;

}
`
interface LoacalazerProps {
    langStatus?: boolean
}


const Localazer: React.FC<LoacalazerProps> = () => {
    const language = ["Рус", "Eng"]
    return (
        <LocalazerWrapper>
            {language.map(lang =>
                <LocalizerButton
                    key={lang}>
                    {lang}
                </LocalizerButton>)
            }


        </LocalazerWrapper>
    )
}

export default Localazer
