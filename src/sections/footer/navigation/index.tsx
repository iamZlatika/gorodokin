import styled from '@emotion/styled'
import React from 'react'
import { NAV_ITEMS_RUS } from '../../../data/navigation'


const NavigationWrapper = styled.footer`
display: flex;
flex-direction: column;
ul{
    list-style: none;
    display: flex;
    margin-top: 58px;
    font-size: 18px;
    line-height: 21px;
    font-family: "Raleway", sans-serif;
    li{
    width: 100px;
    &+li{
        margin-left: 60px;
    }
    }
  
}
`
const Navigation = () => {
    return (
        <NavigationWrapper>
            
            <h2>Навигация</h2>
            <ul>
                {NAV_ITEMS_RUS.map(item =>
                    <li>{item}</li>)}
            </ul>
            
        </NavigationWrapper>
    )
}

export default Navigation
