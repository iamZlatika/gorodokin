import styled from "@emotion/styled";
import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../../components/buttons/Button";
import DatePickerComponent from "../../../components/date-picker";
import moment from "moment";
import Input from "../../../components/input/input";
import { setHours, setMinutes } from "date-fns";
import emailjs from "@emailjs/browser";
import { useDispatch } from "react-redux";
import {
  CHECK_IN,
  IS_INVALID_NAME,
  IS_INVALID_PHONE,
  SET_DATE,
  SET_NAME,
  SET_PHONE,
  SET_TIME,
} from "../../../services/actions";
import { useSelector } from "../../../services/hooks";
import { localiseString } from "../../../services/services";

const CheckInFormStyled = styled.div`
  width: 40%;
  margin-right: 10px;
  margin-top: 40px;
  h2 {
    font-family: "Tenor Sans", sans-serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 37px;
    margin-bottom: 10px;
    color: #ff8427;
  }
  span {
    font-size: 14px;
    line-height: 16px;
    font-family: "Raleway", sans-serif;
    color: #1a181b;
    display: inline-block;
  }
  form {
    width: 100%;
    font-family: "Raleway", sans-serif;
    .datepicker_group {
      display: flex;
      margin-top: 25px;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
  .input_group {
    margin-bottom: 40px;
  }

  @media (max-width: 820px) {
    width: 100%;
    form {
      button {
        margin: 0 auto;
      }
    }
  }
`;
const CheckInForm = () => {
  const language = useSelector((store: any) => store.language);

  const [startDate, setStartDate] = useState(new Date());

  const checkInForm = useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  const isInvalidName = useSelector((store) => store.isInvalidInputNameValue);
  const isInvalidPhone = useSelector((store) => store.isInvalidInputPhoneValue);
  const userInfo = useSelector((store) => store.userInfo);

  const handleSetName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: SET_NAME, name: e.target.value });
  };
  const handleSetPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: SET_PHONE, phone: e.target.value });
  };

  const sendCheckIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInfo.date) {
      dispatch({ type: IS_INVALID_NAME });
    }
    if (!userInfo.time) {
      dispatch({ type: IS_INVALID_NAME });
    } else if (!userInfo.phone) {
      dispatch({ type: IS_INVALID_PHONE });
    } else {
      emailjs.send(`service_k3c5za7`, "template_u8k8s7s", userInfo, "user_fgTATP9b22WUPocctf0YA").then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
      {
        history.push(`/confirm-check-in`, { background: history.location });
      }
      dispatch({ type: CHECK_IN });
    }
  };

  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 0;
  };
  const isSaterday = (date: Date) => {
    const day = date.getDay();
    return day === 6;
  };

  const saterdayIntervals = [
    setHours(setMinutes(new Date(), 20), 11),
    setHours(setMinutes(new Date(), 0), 12),
    setHours(setMinutes(new Date(), 40), 12),
    setHours(setMinutes(new Date(), 20), 13),
    setHours(setMinutes(new Date(), 0), 14),
    setHours(setMinutes(new Date(), 40), 14),
  ];
  const weekDaysIntervals = [
    setHours(setMinutes(new Date(), 0), 14),
    setHours(setMinutes(new Date(), 40), 14),
    setHours(setMinutes(new Date(), 20), 15),
    setHours(setMinutes(new Date(), 0), 16),
    setHours(setMinutes(new Date(), 40), 16),
    setHours(setMinutes(new Date(), 20), 19),
  ];
  return (
    <CheckInFormStyled>
      <h2>{localiseString("interface:checkIn", language)}</h2>
      <span>{localiseString("interface:chooseDate", language)}</span>

      <form ref={checkInForm}>
        <div className="datepicker_group">
          <DatePickerComponent
            value={userInfo.date}
            name="date"
            label={localiseString("interface:date", language)}
            id="date"
            dateFormat="dd.MM.yyyy"
            onChange={(date) => {
              dispatch({ type: SET_DATE, date: moment(date).format("DD.MM.YYYY") });
            }}
            locale={language}
            filterDate={isWeekday}
            minDate={moment().toDate()}
          />
          <DatePickerComponent
            value={userInfo.time}
            name="time"
            timeIntervals={40}
            label={localiseString("interface:time", language)}
            showTimeSelect={true}
            showTimeSelectOnly={true}
            id="time"
            locale="ru"
            dateFormat="HH:mm"
            onChange={(time) => {
              dispatch({ type: SET_TIME, time: moment(time).format("HH:mm") });
            }}
            timeCaption="Время"
            includeTimes={isSaterday(startDate) ? saterdayIntervals : weekDaysIntervals}
            required
          />
        </div>
        <div className="input_group">
          <Input
            required
            label={localiseString("interface:name", language)}
            name="name"
            type="text"
            role="presentation"
            onChange={handleSetName}
            validation={isInvalidName}
          />
          <Input
            validation={isInvalidPhone}
            label={localiseString("interface:phone", language)}
            name="phone"
            type="phone"
            required
            role="phone"
            onChange={handleSetPhone}
          />
        </div>
        <Button color="default" label={localiseString("button:signUp", language)} onClick={sendCheckIn} />
      </form>
      {/* {showConfirmModal && (
                <Modal onClose={closeModal}>
                    <CustomInput />
                </Modal>
            )} */}
    </CheckInFormStyled>
  );
};

export default CheckInForm;
