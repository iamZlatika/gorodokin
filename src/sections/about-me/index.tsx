import styled from '@emotion/styled'
import React from 'react'
import { ABOUT_ME } from '../../data/aboutMe'
import aboutMePhoto from '../../images/photo/photo_02.jpg'
import Info from './info'


const AboutMeStyle = styled.div`
display: flex;
width: 80%;
margin: 200px auto 120px auto;
h2{
    display: none
}
img{
    display: block;
    border-radius: 0px 62px 0px 0px;
    width: 50%;
    height: auto;
    object-fit: cover;
}
@media(max-width: 820px){
    margin-top: 400px;
    flex-direction: column;
   img{
    width: 100%;
    height: 400px;
    margin-bottom: 18px;
   }
   h2{
       display: block;
       font-weight: normal;
       font-size: 32px;
    line-height: 37px;
    font-family: 'Tenor Sans', sans-serif;
    padding-top: 70px;
    padding-bottom: 13px;
   }
} 
`

const AboutMe = () => {


    return (
        <AboutMeStyle id="about_me">
            <h2>Обо мне</h2>
            <img src={aboutMePhoto} alt="" />
            <Info info={ABOUT_ME} />
        </AboutMeStyle>
    )
}

export default AboutMe
