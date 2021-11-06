import React from 'react'
import Facebook from "../../../images/icons/facebook.svg"
import Insta from "../../../images/icons/insta.svg"
import Viber from "../../../images/icons/viber.svg"
import Telegram from "../../../images/icons/telegram.svg"
import Whatsapp from "../../../images/icons/whatsapp.svg"
import styled from '@emotion/styled'

const NetItemWrapper = styled.li`
list-style: none;
background-color: #0E402D;
height: 30px;
width: 30px;
border-radius: 4px;
display: flex;
align-items: center;
justify-content: center;
margin-top: 30px;
& + li{
    margin-left: 33px;
}
img{
    height: 15px;
    width: 15px;
}
`

const SocialNetItem = () => {
    const nets = [Facebook, Insta, Viber, Telegram, Whatsapp]
    return (
        <>
            {nets.map((item, i) =>
                <NetItemWrapper key={i}>
                    <img
                        src={item}
                    />
                </NetItemWrapper>)}
        </>
    )
}

export default SocialNetItem
