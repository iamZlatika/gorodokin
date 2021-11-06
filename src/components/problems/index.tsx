import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { loadProblems, PshychologicalProblem } from '../../data/problems'
import HelpListWrapper from './proplems-list'

const ProblemsWrapper = styled.div`
background-color: #0E402D;
padding-top: 120px;
div{
    width: 80%;
    margin: auto;
h2{
    font-size: 32px;
    line-height: 37px;
    color: #FF8427;
    }  
}
`

const Problems = () => {
    const [problems, setProblems] = useState<PshychologicalProblem[]>([])

    useEffect(() => {
        loadProblems().then(setProblems)
    }, [setProblems])

    return (
        <ProblemsWrapper>
            <div>
                <h2>Чем я могу помочь</h2>
                <HelpListWrapper problems={problems} />
            </div>
        </ProblemsWrapper>
    )
}

export default Problems