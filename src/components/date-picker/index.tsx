import styled from '@emotion/styled'
import React from 'react'
import { default as DatePicker, registerLocale } from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { ru, enUS } from 'date-fns/locale';

registerLocale("ru", ru);
registerLocale("en", enUS)
const DatePickerComponentWrapper = styled.div`
width: 40%!important;
display: flex;
justify-content: space-between;
flex-direction: column;
margin-right: 0;
margin-bottom: 15px;

label{
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
}
div{
    input{
        width: 100%!important;
        padding-left: 5px;
        height: 30px!important;
        border: #C9C9C9 1px solid;
        outline: none;
        border-radius: 2px;
    }
}
.react-datepicker-wrapper{
    width: 100%!important;
    margin-top: 10px;
    height: 30px!important;
    
}
`
interface DatePickerComponentProps {
    selected: Date
    onChange: (date: Date) => void
    dateFormat: string
    id: string
    showTimeSelect?: boolean
    showTimeSelectOnly?: boolean,
    timeIntervals?: number
    filterTime?: () => void
    maxDate?: Date
    minDate?: Date
    showYearDropdown?: boolean
    yearDropdownItemNumber?: boolean
    scrollableYearDropdown?: boolean
    dateFormatCalendar?: string
    timeCaption?: string
    locale?: string
    label: string
}
const DatePickerComponent: React.FC<DatePickerComponentProps> = ({ selected, onChange, dateFormat, id, label, showTimeSelectOnly, showTimeSelect, locale, timeCaption, timeIntervals}) => {


    return (
        <DatePickerComponentWrapper>
            <label htmlFor="">{label}</label>
            <DatePicker
                timeIntervals={timeIntervals}
                id={id}
                selected={selected}
                onChange={onChange}
                dateFormat={dateFormat}
                showTimeSelectOnly={showTimeSelectOnly}
                showTimeSelect={showTimeSelect}
                locale={locale}
                timeCaption={timeCaption}
                
            />
        </DatePickerComponentWrapper>
    )
}

export default DatePickerComponent
