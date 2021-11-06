import styled from '@emotion/styled'
import React from 'react'

interface ProblemItemProps {
    step: string
}

const ProblemItemStyle = styled.li`
    font-family: "Raleway", sans-serif;
   font-size: 16px;
    line-height: 130%;
    padding-bottom: 12px;
    &::marker{
        color: #FF8427
    }
  

`
const ProblemItem: React.FC<ProblemItemProps> = ({ step }) => {
    return <ProblemItemStyle>
        {step}
    </ProblemItemStyle>
}

export default ProblemItem
