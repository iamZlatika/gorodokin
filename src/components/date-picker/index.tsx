import styled from "@emotion/styled";
import React from "react";
import { default as DatePicker, registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ru, enUS } from "date-fns/locale";

registerLocale("ru", ru);
registerLocale("en", enUS);
const DatePickerComponentWrapper = styled.div`
  width: 40% !important;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-right: 0;
  margin-bottom: 15px;

  label {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }
  div {
    input {
      width: 100% !important;
      padding-left: 5px;
      height: 30px !important;
      border: #c9c9c9 1px solid;
      outline: none;
      border-radius: 2px;
    }
  }
  .react-datepicker-wrapper {
    width: 100% !important;
    margin-top: 10px;
    height: 30px !important;
  }
`;
interface DatePickerComponentProps {
  required?: boolean;
  name: string;
  value?: string | null;
  selected?: Date;
  onChange: (e: any) => void;
  onKeyDown?: (e: React.FormEvent) => void;
  dateFormat?: string;
  id: string;
  showTimeSelect?: boolean;
  showTimeSelectOnly?: boolean;
  timeIntervals?: number;
  filterTime?: () => void;
  maxDate?: Date;
  minDate?: Date;
  includeTimes?: Date[];
  showYearDropdown?: boolean;
  yearDropdownItemNumber?: boolean;
  scrollableYearDropdown?: boolean;
  dateFormatCalendar?: string;
  timeCaption?: string;
  locale?: string;
  label: string;
  filterDate?: (date: Date) => boolean;
  placeholderText?: string;
}
const DatePickerComponent: React.FC<DatePickerComponentProps> = ({
  selected,
  onChange,
  dateFormat,
  id,
  label,
  showTimeSelectOnly,
  showTimeSelect,
  locale,
  timeCaption,
  timeIntervals,
  filterDate,
  minDate,
  includeTimes,
  value,
  placeholderText,
  onKeyDown,
}) => {
  return (
    <DatePickerComponentWrapper>
      <label htmlFor="">{label}</label>
      <DatePicker
        onKeyDown={onKeyDown}
        value={value}
        timeIntervals={timeIntervals}
        id={id}
        selected={selected}
        onChange={onChange}
        dateFormat={dateFormat}
        showTimeSelectOnly={showTimeSelectOnly}
        showTimeSelect={showTimeSelect}
        locale="ru"
        timeCaption={timeCaption}
        filterDate={filterDate}
        minDate={minDate}
        includeTimes={includeTimes}
        placeholderText={placeholderText}
      />
    </DatePickerComponentWrapper>
  );
};

export default DatePickerComponent;
