import styled from '@emotion/styled'
import React from 'react'
import Contacts from './contacts'
import Navigation from './navigation'

const FooterWrapper = styled.div`
background-color: #0E402D;
padding-top: 68px;
color: #fff;
.footer_container{
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
   .footer_content{
       display: flex;
       flex-direction: row;
   }
& > div:nth-child(even){
    border-top: solid 1px #fff;
    padding-top: 29px;
    position: relative;
    display: flex;
    flex-direction: row;
    h4{
        margin: 0 auto 29px;
        text-align: center;
        font-family: Raleway;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        margin-bottom: 16px;
        display:block;
    }
    span{
        position: absolute;
        font-family: Tenor Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
    }
}
}
@media(max-width: 820px){
    .footer_container{
        width: 90%;
        .footer_content{
            flex-direction: column;
        }
        & > div:nth-child(even){
            border-top: solid 1px #fff;
            padding-top: 29px;
            flex-direction: column;
    h4{
       
        margin: 16px 0 29px;
        text-align: start;
    }
    span{
        display: block;
        position: static;
    }
}
    }
}   
`

const Footer = () => {


    return (
        <FooterWrapper>
            <div className="footer_container">
                <div className="footer_content">
                    <Contacts />
                    <Navigation />
                </div>
                <div className='footer_rights'>
                    <span>Политика Конфиденциальности</span>
                    <h4>© 2021 All rights reserved.</h4>
                </div>
            </div>
        </FooterWrapper>
    )
}

export default Footer
