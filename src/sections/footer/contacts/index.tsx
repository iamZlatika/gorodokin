import styled from '@emotion/styled'
import React from 'react'
import { CONTACTS_RUS } from '../../../data/contacts'
import SocialNetItems from '../../../components/social-nets'

const ContactsWrapper = styled.div`
display: flex;
flex-direction: column;
width:50%;
.contacts{
    position: relative;
    margin-top: 58px;
    column-gap: 5%;
    row-gap: 15%;
    display: grid;
    grid-template-rows: 40px 40px;
    grid-template-columns: 1fr 1fr;
    font-size: 18px;
    line-height: 21px;
    font-family: "Raleway", sans-serif;
    &:nth-child(even){
        font-family: 'Tenor Sans', sans-serif;
    }

}
ul{
    margin-top: 14px;
    margin-left: 0;
}
@media(max-width: 820px){
    width: 100%;
    h2{
        font-family: "Raleway", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 23px;  
}
    .contacts{
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top:22px;
    }
    div{
        .contacts-item{
            margin-bottom: 14px;
        }
    }
}   
`


const Contacts = () => {

    return (
        <ContactsWrapper>
            <h2>Контакты</h2>
            <div className="contacts">
                <div >
                    <div className='contacts-item'>{CONTACTS_RUS.name}</div>
                    <div className='contacts-item'>{CONTACTS_RUS.phone}</div>
                    <div className='contacts-item'>{CONTACTS_RUS.town}</div>
                </div>
                <SocialNetItems
                    colorScreen="light"
                    positionScreen="static"
                    positionMobile="absolute"
                    directionScreen="row"
                    directionMobile="column"
                    element="footer"
                />
            </div>
        </ContactsWrapper>
    )
}

export default Contacts
