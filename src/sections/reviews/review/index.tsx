import styled from '@emotion/styled'
import React from 'react'
import femaleUser from '../../../images/icons/user-female.svg'
import maleUser from '../../../images/icons/user-male.svg'

interface ReviewProps {
    sex: string
}

const ReviewStyled = styled.div`
display: flex;
justify-content: center;
position: relative;
padding-bottom: 200px;
.user_icon{
    position: relative;
    margin-right: 60px;
    img{
    z-index: 10;
    position: relative;
    }
    .under{
    width: 221px;
    height: 64px;
    background: #FF8427;
    border-radius: 22px 0px 0px 0px;
    position: absolute;
    transform: rotate(-180deg);
    left: 25px;
    bottom: -12px;
    z-index: 1
    }
}
.user_info{
    font-weight: 300;
    font-size: 18px;
    line-height: 130%;
    width: 515px;
    h3{
        font-weight: 500;
        font-size: 20px;
        line-height: 23px;
        margin-bottom: 10px;
    }
    span{
        font-family: 'Tenor Sans', sans-serif;
        font-size: 16px;
        line-height: 19px;
        font-weight:400;
        margin-bottom: 18px;
        display: inline-block;
    }
    p{
        font-weight: 300;
        font-size: 18px;
line-height: 130%;
    }
}
;
`
const Review: React.FC<ReviewProps> = ({ sex }) => {
    return (
        <ReviewStyled>
            <div className="user_icon">
                <img src={femaleUser} alt="" />
                <div className="under"></div>
            </div>
            <div className="user_info">
                <h3>Кристина Никитина</h3>
                <span>27 лет</span>
                <p>Антон - очень профессиональный психолог. У меня были проблемы с самоопредитением. Какие-то чувства тревоги и дискомфорта. У меня было деприссивное состояние. Антон мне помог, я полувствовала себя легче, более уверенной. Он помог в прямом смысле найти смысл жизни.</p>
            </div>
        </ReviewStyled>
    )
}

export default Review
