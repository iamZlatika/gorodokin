import styled from '@emotion/styled'
import React from 'react'
import { NAV_ITEMS_RUS } from '../../../data/navigation'


const NavigationWrapper = styled.footer`
display: flex;
flex-direction: column;
width: 50%; 
padding-left: 40px;
h2{
    font-family: "Raleway", sans-serif;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 23px;  
}
ul{
    list-style: none;
    display: flex;
    flex-direction: row;
    margin-top: 58px;
    font-size: 18px;
    line-height: 21px;
    font-family: "Raleway", sans-serif;
    flex-wrap: wrap;
    justify-content: space-between;
   a{
       color: #fff;
       text-decoration: none;
    li{
        margin-bottom: 20px;
        white-space: nowrap;
        cursor: pointer;
    }
}
}
@media(max-width: 820px){
    padding-left: 0;
    margin-top: 40px;
    ul{
        flex-direction: column;
        margin: 22px 0;
    }
}
`
const Navigation = () => {
    return (
        <NavigationWrapper>
            <h2>Навигация</h2>
            <ul>

                {NAV_ITEMS_RUS.map(item => <a href={`#${item.id}`}>
                    <li>{item.label}</li></a>)}
            </ul>

        </NavigationWrapper>
    )
}

export default Navigation
