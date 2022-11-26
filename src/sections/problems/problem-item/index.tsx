import {ProblemItemStyle} from './style'
import React from 'react'

interface ProblemItemProps {
    step: string
}


const ProblemItem: React.FC<ProblemItemProps> = ({ step }) => {
    return <ProblemItemStyle >
        {step}
    </ProblemItemStyle>
}

export default ProblemItem
