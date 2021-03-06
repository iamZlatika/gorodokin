import styled from '@emotion/styled'
import React from 'react'
import { PshychologicalProblem } from '../../../data/problems'
import ProblemItem from '../problem-item'


const ProblemsListWrapper = styled.div`
width: 100%!important;
 display: grid;
 margin: 0!important;
 justify-content: flex-start;
/* flex-wrap: wrap; */
 padding-bottom: 120px;
 color: #fff;
 grid-template-rows: 1fr;
 grid-template-columns: repeat(4, 1fr);
 div{
     margin-top: 0;
    h3{
        display: block;
        margin-top: 83px;
        font-size: 18px;
        line-height: 21px;
       padding-bottom: 61px;
      
       
    }    
}
@media(max-width: 1200px){
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
}
@media(max-width: 820px){
    display: flex;
    flex-direction: column;
    .list-wrapper{
        width: 100%;
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
                    <div key={name} className='list-wrapper'>
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
