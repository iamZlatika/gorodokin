import styled from '@emotion/styled'
import React from 'react'
import Contacts from './contacts'
import Navigation from './navigation'

const FooterWrapper = styled.div`
background-color: #0E402D;
padding-top: 68px;
color: #fff;
div{
    width: 80%;
    margin: 0 auto;
    display: flex;
}
& > div:nth-child(even){
    border-top: solid 1px #fff;
    padding-top: 29px;
    position: relative;
    h4{
        margin: 0 auto 29px;
    }
    span{
        position: absolute;
    }
}
`

const Footer = () => {


    return (
        <FooterWrapper>
            <div>
                <Contacts />
                <Navigation />
            </div>
            <div>
                <span>Политика Конфиденциальности</span>
                <h4>© 2021 All rights reserved.</h4>
            </div>
        </FooterWrapper>
    )
}

export default Footer
