import styled from '@emotion/styled'
import React from 'react'
import SocialNetItem from '../social-net-item'

const NetItems = styled.ul`
display: flex;
width: 90%;
margin-left: auto;
margin-bottom: 156px;
`

const SocialNetItems = () => {
    return (
        <NetItems>
            <SocialNetItem />
        </NetItems>
    )
}

export default SocialNetItems
