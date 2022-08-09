import styled from '@emotion/styled'
import React from 'react'
import { contacts } from '../../../data/contacts'
import SocialNetItems from '../../../components/social-nets'
import { useSelector } from '../../../services/hooks'
import { localiseString } from '../../../services/services'

const ContactsWrapper = styled.div`
display: grid;
margin-bottom: 60px;
width:50%;
h2{
    font-family: "Raleway", sans-serif;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 21px;  
}
.contacts{
    margin-top:30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    row-gap:14px;
    align-items: center;
    position: relative;
    font-size: 18px;
    line-height: 16px;
    font-family: "Raleway", sans-serif;
    &:nth-child(even){
        font-family: 'Tenor Sans', sans-serif;
    }
    .contacts-item{
           margin-bottom: 0;
           text-decoration: none;  
           color: #fff;
       
   }

}
@media(max-width: 820px){
    display: flex;
    flex-direction: column;
    width:100%;
    margin-bottom: 0;
    h2{
        font-family: "Raleway", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 23px;  
}
    .contacts{
     display: flex;
     flex-direction: column;
     justify-content: flex-start;
      margin-top:22px;
      align-items: flex-start;
      grid-template-rows: 100px 100px 100px 100px 100px;
      row-gap: 0; 
    
      .contacts-item{
        margin-bottom: 30px;
      }
    }
    
}   
`


const Contacts = () => {

    const language = useSelector((store: any) => store.language);
    return (
        <ContactsWrapper>
            <h2>{localiseString("nav:contacts", language)}</h2>
            <div className="contacts">
                <div className='contacts-item'>{localiseString(contacts.name, language)}</div>
                 <a className='contacts-item' href="tel:+380996199029">+380996199029</a>
                <div className='contacts-item'>{localiseString(contacts.town, language)}</div>
                <SocialNetItems
                    element="footer-screen"
                />
            </div>
        </ContactsWrapper>
    )
}

export default Contacts
