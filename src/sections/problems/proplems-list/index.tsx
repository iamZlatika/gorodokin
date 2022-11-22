import styled from '@emotion/styled'
import React from 'react'
import { PsychologicalProblem, psychoProblems } from '../../../data/problems'
import { useSelector } from '../../../services/hooks'
import { localiseString } from '../../../services/services'
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
       font-family: "Raleway", sans-serif;
      
       
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



const ProblemsList: React.FC = () => {
    const language = useSelector((store: any) => store.language);
   
    return (
        <ProblemsListWrapper>
            {
                psychoProblems.map(({ name, title, helpSteps }) =>
                    <div key={name} className='list-wrapper'>
                        <h3>{localiseString(title, language)}</h3>
                        <ul>
                            {helpSteps.map((step, i) => <ProblemItem key={i} step={localiseString(step, language)} />)}
                        </ul>
                    </div>)
            }
        </ProblemsListWrapper>
    )
}

export default ProblemsList
