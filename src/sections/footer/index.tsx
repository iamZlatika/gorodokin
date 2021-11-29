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
   }
& > div:nth-child(even){
    border-top: solid 1px #fff;
    padding-top: 29px;
    position: relative;
    h4{
        margin: 0 auto 29px;
        text-align: center;
    }
    span{
        position: absolute;
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
                <div>
                    <span>Политика Конфиденциальности</span>
                    <h4>© 2021 All rights reserved.</h4>
                </div>
            </div>
        </FooterWrapper>
    )
}

export default Footer
