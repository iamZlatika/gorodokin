import styled from '@emotion/styled'
import React from 'react'
import ReceptionPhoto from "../../images/photo/photo_03.jpg"
import CheckInForm from './check-in-form/CheckInForm'

const CheckInWrapper = styled.div`
width: 80%;
margin: 120px auto;
display: flex;
justify-content: space-between;
img{
    width: 702px;
    height: 469px;
    border-radius: 0px 62px 0px 0px;
}
`

const CheckIn = () => {
    return (
        <CheckInWrapper>
            <CheckInForm />
            <img src={ReceptionPhoto} alt="" />
        </CheckInWrapper>
    )
}

export default CheckIn
