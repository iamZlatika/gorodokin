import styled from '@emotion/styled'
import React from 'react'
import { AboutMeInfo } from '../../../data/aboutMe'
import Button from '../../../components/buttons/Button'

const InfoWrapper = styled.div`
margin-left: 50px;
width: 50%;
color: #1A181B;
h2{
    display: block;
    font-size: 32px;
    line-height: 37px;
    font-family: 'Tenor Sans', sans-serif;
    padding-top: 70px;
    padding-bottom: 13px;
}
p{
    font-size: 18px;
    line-height: 130%;
    font-family: "Raleway", sans-serif;
}
span{
    font-family: "Raleway", sans-serif;
    font-weight: bold;
    font-size: 18px;
    display: inline-block;
    line-height: 130%;
    padding-top: 14px;
    padding-bottom: 22px;
}

@media(max-width: 1200px){
    h2{
        padding-top: 0;
    }
}
@media(max-width: 820px){
    margin-left: 0;
    width: 100%;
    h2{
    display: none;
}
.btn_container{
    display: flex;
    justify-content: center;
}
}
`

interface InfoProps {
    info: AboutMeInfo;
}
const Info: React.FC<InfoProps> = ({ info }) => {
    const onClick = () => {
        console.log(info.title)
    }
    const { title, text, note } = info
    return (

        <InfoWrapper>
            <h2>{title}</h2>
            <p>{text}</p>
            <span>{note}</span>
            <div className='btn_container'>
            <Button onClick={onClick} label="Записаться на прием" color="light" /></div>
        </InfoWrapper>
    )
}

export default Info
