import React from 'react'
import Facebook from "../../../images/icons/Facebook"
import Insta from "../../../images/icons/Insta"
import Viber from "../../../images/icons/Viber"
import Telegram from "../../../images/icons/Telegram"
import Whatsapp from "../../../images/icons/Whatsapp"
import styled from '@emotion/styled'



interface SocialNetItemProps {
    colorMobile: string
    colorScreen: string
    className?: string
    direction: string
    element: string

}
const NetItemWrapper = styled.li<SocialNetItemProps>`
list-style: none;
background-color: ${(props) => (props.colorScreen === "dark" ? "#0E402D" : "#fff")};
margin-left: ${(props) => (props.direction === "row" ? `10px` : `0`)};
height: ${(props) => (props.element === "footer" ? `22px` : `30px`)};
width: ${(props) => (props.element === "footer" ? `22px` : `30px`)};
border-radius: 4px;
display: flex;
align-items: center;
justify-content: center;
margin-top: 30px;
svg{
    height: 15px;
    width: 15px;
    path{
    fill:${(props) => (props.colorScreen === "dark" ? "#fff" : "#0E402D")};  }  
}
@media(max-width: 820px){  
    background-color: ${(props) => (props.colorMobile === "dark" ? "#0E402D" : "#fff")};
    svg{
        path{
    fill:${(props) => (props.colorMobile === "dark" ? "#fff" : "#0E402D")};  }  
    }
}
`

const SocialNetItem: React.FC<SocialNetItemProps> = ({ direction, element, colorScreen, colorMobile }) => {
    const nets = [

        { link: 'https://www.facebook.com/gorodokin.md/', icon: <Facebook /> },
        { link: 'https://www.instagram.com/gorodokin.md/?hl=ru', icon: <Insta /> },
        { link: 'https://www.instagram.com/gorodokin.md/?hl=ru', icon: <Viber /> },
        { link: 'https://t.me/gorodokinmd', icon: <Telegram /> },
        { link: 'https://api.whatsapp.com/send?phone=380996199029', icon: <Whatsapp /> }
    ]

    return (
        <>
            {
                nets.map((net, idx) =>
                    <a
                        key={idx}
                        href={net.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <NetItemWrapper
                            element={element}
                            colorScreen={colorScreen}
                            colorMobile={colorMobile}
                            direction={direction}
                        >
                            {net.icon}
                        </NetItemWrapper></a>)
            }
        </>
    )
}

export default SocialNetItem
