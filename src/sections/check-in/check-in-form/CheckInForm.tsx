import styled from '@emotion/styled'
import React, { useState } from 'react'
import Button from '../../../components/buttons/Button'
import DatePickerComponent from '../../../components/date-picker'
import moment from "moment"
import Input from '../../../components/input/input'




const CheckInFormStyled = styled.div`
width: 40%;
 
margin-top: 40px;
h2{
    font-family: 'Tenor Sans', sans-serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 37px;
    margin-bottom: 10px;
    color: #FF8427;
}
span{
    font-size: 14px;
    line-height: 16px;
    font-family: "Raleway", sans-serif;
    color: #1A181B;
    display: inline-block;
}
form{
    font-family: "Raleway", sans-serif;
    .datepicker_group{
        display: flex;
        margin-top: 25px;
    
    }
    .input_group{
        margin-top: 40px;
        margin-bottom: 40px;
        width: 400px;
    }
}
`

const CheckInForm = () => {

    const [startDate, setStartDate] = useState(new Date());
    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        console.log("submit")
    }

    const onChange = (date: Date) => {
        setStartDate(date)

    }

    return (
        <CheckInFormStyled>

            <h2>Записаться на прием</h2>
            <span>Выбери подходящую дату и заполни поля</span>

            <form action="
            ">
                <div className="datepicker_group">
                    <DatePickerComponent
                        label="Дата"
                        id="date"
                        dateFormat="dd.MM.yyyy"
                        selected={startDate}
                        onChange={(date) => onChange(date)}
                        locale="ru"
                    />
                    <DatePickerComponent
                        timeIntervals={40}
                        label="Время"
                        showTimeSelect={true}
                        showTimeSelectOnly={true}
                        id="time"
                        locale="ru"
                        dateFormat="HH:mm"
                        selected={startDate}
                        onChange={(date) => onChange(date)}
                        timeCaption="Время"
                    />
                </div>
                <div className="input_group">
                    <Input

                        label="Имя"
                        name="name"
                        type="text"
                        required
                        role="presentation"
                        autocomplete="off"
                    />
                    <Input

                        label="Телефон"
                        name="phone"
                        type="phone"
                        required
                        role="phone"
                    // autocomplete="off"
                    />
                </div>
                <Button color="default" label="Записаться" onClick={(e) => onSubmit(e)} />
            </form>

        </CheckInFormStyled>
    )
}

export default CheckInForm
