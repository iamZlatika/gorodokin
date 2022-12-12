import React, { useRef } from "react";
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
import { CheckInFormStyled } from "./styles";

const CheckInForm = () => {
  const language = useSelector((store: any) => store.language);

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
    return day == 6;
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

  const supressInput = (e: React.KeyboardEvent) => {
    e.preventDefault();
  };
  return (
    <CheckInFormStyled>
      <h2>{localiseString("interface:checkIn", language)}</h2>
      <span>{localiseString("interface:chooseDate", language)}</span>

      <form>
        <div className="datepicker_group">
          <DatePickerComponent
            value={userInfo.date && moment(userInfo.date).format("DD.MM.YYYY")}
            name="date"
            label={localiseString("interface:date", language)}
            id="date"
            dateFormat="DD.MM.YYYY"
            onChange={(date) => {
              dispatch({ type: SET_DATE, date: date });
            }}
            locale={language}
            filterDate={isWeekday}
            minDate={moment().toDate()}
            placeholderText={localiseString("interface:date", language)}
          />
          <DatePickerComponent
            onKeyDown={supressInput}
            value={userInfo.time && moment(userInfo.time).format("HH:mm")}
            name="time"
            timeIntervals={40}
            label={localiseString("interface:time", language)}
            showTimeSelect={true}
            showTimeSelectOnly={true}
            id="time"
            locale="ru"
            dateFormat="HH:mm"
            placeholderText={localiseString("interface:time", language)}
            onChange={(time) => {
              // console.log("1",
              //   weekDaysIntervals.filter(
              //     (interval: Date) => moment(interval).format("HH:mm") === moment(time).format("HH:mm")
              //   )
              // );
              // console.log("2",
              //   weekDaysIntervals.filter((interval: Date) => console.log(moment(interval).format("HH:mm"))),

              // );
              // console.log("3", typeof  moment(time).format("HH:mm"),  moment(time).format("HH:mm"))
              // weekDaysIntervals.filter(
              //   (interval: Date) => moment(interval).format("HH:mm") !== moment(time).format("HH:mm")
              // ).length === 0;

              // if (
              //   time &&
              //   weekDaysIntervals.filter(
              //     (interval: Date) => moment(interval).format("HH:mm") !== moment(time).format("HH:mm")
              //   ).length === 0
              // ) {
              //   return;
              // } else {
              dispatch({ type: SET_TIME, time: time });
              // }
            }}
            timeCaption="Время"
            includeTimes={isSaterday(new Date(userInfo.date)) ? saterdayIntervals : weekDaysIntervals}
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
