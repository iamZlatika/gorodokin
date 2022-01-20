import styled from '@emotion/styled'
import React from 'react'
import { CONTACTS_RUS } from '../../../data/contacts'
import SocialNetItems from '../../../components/social-nets'

const ContactsWrapper = styled.div`
display: flex;
flex-direction: column;
width:50%;
.contacts{
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
`


const Contacts = () => {

    return (
        <ContactsWrapper>
            <h2>Контакты</h2>
            <div className="contacts">
                <div>{CONTACTS_RUS.name}</div>
                <div>{CONTACTS_RUS.phone}</div>
                <div>{CONTACTS_RUS.town}</div>
            </div>
            <SocialNetItems 
            color="light" 
            position="static"
            direction="row"
            />
        </ContactsWrapper>
    )
}

export default Contacts
