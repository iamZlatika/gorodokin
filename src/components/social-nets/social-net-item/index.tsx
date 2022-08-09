import React from 'react'
import Facebook from "../../../images/icons/Facebook"
import Insta from "../../../images/icons/Insta"
import Viber from "../../../images/icons/Viber"
import Telegram from "../../../images/icons/Telegram"
import Whatsapp from "../../../images/icons/Whatsapp"
import styled from '@emotion/styled'



interface SocialNetItemProps {
    element: string
}
const NetItemWrapper = styled.li<SocialNetItemProps>`
list-style: none;
background-color: ${(props) => (props.element === "showcase-screen" ? "#0E402D" : "#fff")};
margin-left: ${(props) => (props.element === "showcase-screen" ? `30px` : `0`)};
height: 30px;
width: 30px;
border-radius: 4px;
display: flex;
align-items: center;
justify-content: center;
margin-top: ${(props) => (props.element === "footer-screen" ? `0` : `30px`)};
margin-right: ${(props) => (props.element === "footer-screen" && `30px`)};
svg{
    height: 15px;
    width: 15px;
    path{
    fill:${(props) => (props.element === "showcase-screen" ? "#fff" : "#0E402D")};  }  
}
@media(max-width: 820px){  
    margin-right: ${(props) => (props.element === "footer-mobile" && `0px`)};
    margin-bottom: ${(props) => (props.element === "footer-mobile" && `30px`)};
}
`

const SocialNetItem: React.FC<SocialNetItemProps> = ({ element }) => {
    const nets = [
        { link: 'https://www.facebook.com/gorodokin.md/', icon: <Facebook /> },
        { link: 'https://www.instagram.com/gorodokin.md/?hl=ru', icon: <Insta /> },
        { link: 'viber://chat?number=%2B380996199029', icon: <Viber /> },
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

                        >
                            {net.icon}
                        </NetItemWrapper></a>)
            }
        </>
    )
}

export default SocialNetItem
