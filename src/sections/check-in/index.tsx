import styled from '@emotion/styled'
import React from 'react'
import ReceptionPhoto from "../../images/photo/photo_03.jpg"
import CheckInForm from './check-in-form/CheckInForm'

const CheckInWrapper = styled.div`
width: 80%;
margin: 100px auto;
display: flex;
justify-content: space-between;
img{
    display: block;
    width: 50%;
    height: auto;
    border-radius: 0px 62px 0px 0px;
    object-fit: cover;
  
}
@media(max-width: 820px){
    padding-bottom: 50px;
    img{
    display: none;
    }
}   
`

const CheckIn = () => {
    return (
        <CheckInWrapper id="contacts">
            <CheckInForm />
            <img src={ReceptionPhoto} alt="" />
        </CheckInWrapper>
    )
}

export default CheckIn
