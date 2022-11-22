import styled from '@emotion/styled'
import React from 'react'
import { navItems } from '../../../data/navigation'
import { useSelector } from '../../../services/hooks'
import { localiseString } from '../../../services/services'


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
line-height: 21px;  
}
ul{
    list-style: none;
    display: flex;
    flex-direction: row;
    margin-top: 36px;
    font-size: 18px;
    line-height: 16px;
    font-family: "Raleway", sans-serif;
    flex-wrap: wrap;
    justify-content: space-between;
   a{
       color: #fff;
       text-decoration: none;
       margin-bottom: 30px;
    li{
        /* margin-bottom: 20px; */
        white-space: nowrap;
        cursor: pointer;
       
    }
}
}
@media(max-width: 820px){
    padding-left: 0;
    /* margin-top: 40px; */
    width: 100%;
    ul{
        flex-direction: column;
        margin: 22px 0;
    }
}
`
const Navigation = () => {
    const language = useSelector((store: any) => store.language);
    return (
        <NavigationWrapper>
            <h2>{localiseString("interface:navigation", language)}</h2>
            <ul>

                {navItems.map(item => <a href={`#${item.id}`} key={item.id}>
                    <li>{localiseString(item.label, language)}</li></a>)}
            </ul>

        </NavigationWrapper>
    )
}

export default Navigation
