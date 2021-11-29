import styled from '@emotion/styled'
import React from 'react'

const ExitWrapper = styled.div`
min-width: 20px;
height: 20px;
margin-top: 22px;
overflow: hidden;
display: none;
align-items: center;
justify-content: center;
position: absolute;
right: 350px;
cursor: pointer;

div{
    
    height: 2px;
    background-color: #fff;
    width: 26px;
    position: absolute;
}
.right{
    transform:rotate(45deg); 
}
.left{
    transform:rotate(-45deg);
}

@media (max-width: 820px){
    display: flex;
}
`

const Exit = () => {
    return (
        <ExitWrapper>
            <div className="right"></div>
            <div className="left"></div>
        </ExitWrapper>
    )
}

export default Exit
