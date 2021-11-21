import React from 'react'
import Facebook from "../../../images/icons/Facebook"
import Insta from "../../../images/icons/Insta"
import Viber from "../../../images/icons/Viber"
import Telegram from "../../../images/icons/Telegram"
import Whatsapp from "../../../images/icons/Whatsapp"
import styled from '@emotion/styled'


interface SocialNetItemProps {
    color: string
}
const NetItemWrapper = styled.li<Pick<SocialNetItemProps, "color">>`
list-style: none;
background-color: ${(props) => (props.color === "dark" ? "#0E402D" : "#fff")};;

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
svg{
    height: 15px;
    width: 15px;
    path{
    fill:${(props) => (props.color === "dark" ? "#fff" : "#0E402D")}  }  
}
`

const SocialNetItem: React.FC<SocialNetItemProps> = ({ color }) => {
    const nets = [<Facebook />, <Insta />, <Viber />, <Telegram />, <Whatsapp />]
    return (
        <>
            {nets.map((item, i) =>
                <NetItemWrapper
                    key={i}
                    color={color}
                >
                    {item}
                </NetItemWrapper>)}
        </>
    )
}

export default SocialNetItem
