import styled from '@emotion/styled'
import React, { useState } from 'react'
import Arrow from '../../components/arrow'
import Dot from '../../components/dot'
import Line from '../../components/line'
import { CERTIFICATES } from '../../data/certificates'
import NumberLine from './numberline'

const CertificateWrapper = styled.div`
width: 90%;
margin-right: auto;
height: 800px;
position: relative;
display: flex;
padding-left: 10%;
flex-direction: column;
align-items: center;
.sert-title{
    width: 360px;
    display: flex;
    justify-content: center;

    h2{
         margin-top: 110px;
        font-size: 32px;
        line-height: 37px;
        color: #1A181B;
        text-align: center;
        font-family: 'Tenor Sans', sans-serif;
        font-weight: 400;
}}
    .time_line{
        display: flex;
        margin-top: 230px;
        flex-direction: row;
        .cert-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        &:first-child div:first-child {
            background: linear-gradient(90deg, rgba(151,154,153,1) 0%, rgba(151,154,153,1) 36%, rgba(14,64,45,1) 100%, rgba(14,64,45,1) 100%);
            opacity: 0.3;
         }
    &:last-child div div:nth-child(3) {
            background: linear-gradient(90deg, rgba(151,154,153,1) 0%, rgba(151,154,153,1) 36%, rgba(14,64,45,1) 100%, rgba(14,64,45,1) 100%);
            transform: rotate(180deg);
            opacity: 0.3;
    }
    h4{
         margin-bottom: 30px;
}
.cert-pic{
    display: flex;
    flex-direction: row;
    align-items: center;
   } 
.cert-text{
    max-width: 250px;
    text-align: center;
    h3{
        display: none;
    }   
}   
} 
}
.certificates_nav{
    position: absolute;
    bottom: 120px;
    display: flex;
    width: 100px;
    justify-content: space-between;
    right: 0;
}
@media(max-width: 1200px){
    /* height: auto; */
    
    .cert-text{
        width: 180px
    }
}
@media(max-width: 820px){
     height: auto;
    .sert-title{
        justify-content: flex-start;
        h2{
            font-size: 24px;
            line-height: 28px; 
        }
    }
    .time_line{
        width: 100%;
        height: 800px;
        margin-top: 20px;
        flex-direction: column;
        .cert-item{
            flex-direction: row;
            justify-content: center;
            h4{
                display: none;
            }
            .cert-pic{
                flex-direction: column;
            }
            .cert-text{
                transform: translateY(90px);
                border: 1px solid #000000;
                box-sizing: border-box;
                border-radius: 10px;
                padding: 16px;
                width: auto;
                text-align: start;
                font-family: "Raleway", sans-serif;
                font-size: 16px;
                line-height: 130%;
                margin-left: 64px;
                h3{
                    font-family: 'Tenor Sans', sans-serif;
                    font-size: 20px;
                    line-height: 23px;
                }
            }
        }
    }
    .certificates_nav{
        position: static;
        margin-bottom: 60px;
        width: 360px;
    }
}
@media(max-width: 350px){
    .sert-title{
        width: auto;
    }

}
`

const Certificate = () => {
    const [certificates, setCertificates] = useState(CERTIFICATES)
    return (
        <CertificateWrapper id="certificates">
            <div className="sert-title">
                <h2>Сертификаты</h2>
            </div>
            <NumberLine />
            <div className="time_line">
                {certificates.map((cert, idx) => cert.status &&
                    <div className="cert-item"
                        key={idx}>
                        <h4>{cert.year}</h4>
                        <div className="cert-pic">
                            <Line />
                            <Dot />
                            <Line />
                        </div>
                        <div
                            className="cert-text">
                            <h3>{cert.year}</h3>
                            <p>{cert.textRUS}</p>
                        </div>
                    </div>)}

            </div>
            <div className="certificates_nav">
                <Arrow direction="left" color="dark" className="arrow_left" />
                <Arrow direction="right" color="dark" className="arrow_right" />
            </div>
        </CertificateWrapper>
    )
}

export default Certificate
