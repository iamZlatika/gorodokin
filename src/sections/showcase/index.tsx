import styled from '@emotion/styled'
import React from 'react'
import LeftShowcase from './left-showcase-side'
import RightShowcase from './right-showcase-side'

const ShowcaseWrapper = styled.div`

background-color: #0E402D;
color: #fff;
height: 619px;
    div{
        display: flex;
        width: 90%;
        margin-left: auto;
    }
;
`

const Showcase = () => {
    return (
        <ShowcaseWrapper>
            <div>
                <LeftShowcase />
                <RightShowcase />
            </div>
        </ShowcaseWrapper>
    )
}

export default Showcase
