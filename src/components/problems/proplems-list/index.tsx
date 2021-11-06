import styled from '@emotion/styled'
import React from 'react'
import { PshychologicalProblem } from '../../../data/problems'
import ProblemItem from '../problem-item'


const ProblemsListWrapper = styled.div`
width: 100%!important;
 display: flex;
 margin: 0!important;
 justify-content: flex-start;

 padding-bottom: 120px;
 color: #fff;
 div{
     margin-top: 0;
    h3{
        display: block;
        margin-top: 83px;
        font-size: 18px;
        line-height: 21px;
       padding-bottom: 61px;
      
       
    }
   
    ul{
        margin-right: 60px;
    }
}
`

export interface HelpListProps {
    problems: PshychologicalProblem[]
}

const ProblemsList: React.FC<HelpListProps> = ({ problems }) => {
    return (
        <ProblemsListWrapper>
            {
                problems.map(({ name, title, helpSteps }) =>
                    <div key={name}>
                        <h3>{title}</h3>
                        <ul>
                            {helpSteps.map((step, i) => <ProblemItem key={i} step={step} />)}
                        </ul>
                    </div>)
            }
        </ProblemsListWrapper>
    )
}

export default ProblemsList
