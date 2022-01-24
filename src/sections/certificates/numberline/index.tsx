import styled from '@emotion/styled'
import React from 'react'
import Dot from '../../../components/dot'
import Line from '../../../components/line'
import { CERTIFICATES } from '../../../data/certificates'


const NumberLineStyled = styled.div`

position: absolute;
top: 240px;
left: 50px;
height: 600px;
.side-line{
    .side-line_title{
        margin-top: 3px;
        display: flex;
        flex-direction: row;
        .side-dot{
            border: 1px solid #0E402D;
            box-sizing: border-box;  
            width: 14px;
            height: 14px;
            border-radius: 50%;
            transform: translateX(-6px);
        }
    }
    .line{
        width: 2px;
        height: 150px;
        background-color: #1D7874;
        opacity: 0.3;
    }
 
    &:last-child .line{
        display: none;
    }
    
}
@media(max-width: 820px){
    display: flex;
    height: 100px;
    position: relative;
    left: 0;
    top: 0;
    .side-line{
       .side-line_title{
        flex-direction: column-reverse;
        
        width: 20px;
             
         .side-dot{
              /* transform: translateX(10px);*/
                transform: translateY(10px); 
                width: 20px;
                height: 20px;
        }
        span{
            display: flex;
            width: 20px;
            font-size: 16px;
            line-height: 19px;
            transform: translateY(8px);
           margin-left: 6px;
        }
    }
        .line{
        width: 150px;
        height: 2px;
        margin-left:20px;
        opacity: 0.3;
    }
    }
}
@media(max-width: 350px){
    .side-line{
        .line{
            width: 80px;
        }
    }
}
`

const NumberLine = () => {
    return (
        <NumberLineStyled>
            {CERTIFICATES.map((cert, idx) => cert.status &&
                <div
                    className="side-line"
                    key={idx}>
                    <div className="side-line_title">
                        <div className="side-dot" />
                        <span>{idx}</span>
                    </div>
                    <div className="line"></div>
                </div>)}


        </NumberLineStyled>
    )
}

export default NumberLine
