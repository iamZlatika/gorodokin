import styled from '@emotion/styled'
import React from 'react'
import SocialNetItem from './social-net-item'

interface SocialNetItemsProps {
    color: string
}

const NetItems = styled.ul`
display: flex;
width: 90%;
margin-left: auto;
margin-bottom: 156px;
`

const SocialNetItems: React.FC<SocialNetItemsProps> = ({ color }) => {
    return (
        <NetItems>
            <SocialNetItem color={color} />
        </NetItems>
    )
}

export default SocialNetItems
