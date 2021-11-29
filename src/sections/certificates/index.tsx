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
    h2{
         margin-top: 110px;
        font-size: 32px;
        line-height: 37px;
        color: #1A181B;
}
    .time_line{
        display: flex;
        margin-top: 230px;
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
   } 
.cert-text{
    max-width: 250px;
    text-align: center;
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
    .cert-text{
        width: 180px    }
}
`

const Certificate = () => {
    const [certificates, setCertificates] = useState(CERTIFICATES)
    return (
        <CertificateWrapper>
            <h2>Сертификаты</h2>
            <NumberLine />
            <div className="time_line">
                {certificates.map((cert, idx) => cert.status &&
                    <div
                        className="cert-item"
                        key={idx}>
                        <h4>{cert.year}</h4>
                        <div className="cert-pic">
                            <Line />
                            <Dot />
                            <Line />
                        </div>
                        <div
                            className="cert-text">
                            {cert.textRUS}
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
