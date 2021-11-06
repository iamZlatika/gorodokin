import styled from '@emotion/styled'
import React from 'react'
import { ABOUT_ME } from '../../data/aboutMe'
import aboutMePhoto from '../../images/photo/photo_02.jpg'
import Info from './info'


const AboutMeStyle = styled.div`
display: flex;
width: 80%;
margin: 0 auto 120px auto;

img{
    display: block;
    border-radius: 0px 62px 0px 0px;
    width: 587px;
    height: 586px;
    object-fit: cover;
}

`

const AboutMe = () => {


    return (
        <AboutMeStyle>
            <img src={aboutMePhoto} alt="" />
            <Info info={ABOUT_ME} />
        </AboutMeStyle>
    )
}

export default AboutMe
