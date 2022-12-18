import { ReviewInfo } from "../types";

export const SET_LANGUAGE: "SET_LANGUAGE" = "SET_LANGUAGE";
export const OPEN_REVIEW_MODAL: "OPEN_REVIEW_MODAL" = "OPEN_REVIEW_MODAL";
export const OPEN_CERTIFICATE_MODAL: "OPEN_CERTIFICATE_MODAL" = "OPEN_CERTIFICATE_MODAL";
export const CLOSE_REVIEW_MODAL: "CLOSE_REVIEW_MODAL" = "CLOSE_REVIEW_MODAL";
export const CHECK_IN: "CHECK_IN" = "CHECK_IN";
export const IS_INVALID_DATE: "IS_INVALID_DATE" = "IS_INVALID_DATE";
export const IS_INVALID_TIME: "IS_INVALID_TIME" = "IS_INVALID_TIME";
export const IS_INVALID_NAME: "IS_INVALID_NAME" = "IS_INVALID_NAME";
export const IS_INVALID_PHONE: "IS_INVALID_PHONE" = "IS_INVALID_PHONE";
export const IS_VALID_NAME: "IS_VALID_NAME" = "IS_VALID_NAME";
export const IS_VALID_PHONE: "IS_VALID_PHONE" = "IS_VALID_PHONE";
export const SET_PHONE: "SET_PHONE" = "SET_PHONE";
export const SET_NAME: "SET_NAME" = "SET_NAME";
export const SET_DATE: "SET_DATE" = "SET_DATE";
export const SET_TIME: "SET_TIME" = "SET_TIME";
export const CLOSE_MODAL: "CLOSE_MODAL" = "CLOSE_MODAL";
export const SET_WINDOW_SIZE: "SET_WINDOW_SIZE" = "SET_WINDOW_SIZE";
export const SET_CERTIFICATE_PROPS: "SET_CERTIFICATE_PROPS" = "SET_CERTIFICATE_PROPS";
export const SET_REVIEW_PROPS: "SET_REVIEW_PROPS" = "SET_REVIEW_PROPS";
export const CLOSE_CERTIFICATE_MODAL: "CLOSE_CERTIFICATE_MODAL" = "CLOSE_CERTIFICATE_MODAL";
export const SET_TOGGLE_REVIEW_STATUS: "SET_TOGGLE_REVIEW_STATUS" = "SET_TOGGLE_REVIEW_STATUS";
export const SET_WINDOW_WIDTH: "SET_WINDOW_WIDTH" = "SET_WINDOW_WIDTH";
export const SET_REVIEW_SEX: "SET_REVIEW_SEX" = "SET_REVIEW_SEX";
export const SET_REVIEW_AGE: "SET_REVIEW_AGE" = "SET_REVIEW_AGE";
export const SET_REVIEW_NAME: "SET_REVIEW_NAME" = "SET_REVIEW_NAME";
export const SET_REVIEW_REVIEW: "SET_REVIEW_REVIEW" = "SET_REVIEW_REVIEW";

export interface ISetLanguage {
  readonly type: typeof SET_LANGUAGE;
  language: { payload: string };
}

export interface IOpenReviewModal {
  readonly type: typeof OPEN_REVIEW_MODAL;
}
export interface ICloseModal {
  readonly type: typeof CLOSE_MODAL;
}
export interface ICloseReviewModal {
  readonly type: typeof CLOSE_REVIEW_MODAL;
}
export interface ICloseCertificateModal {
  readonly type: typeof CLOSE_CERTIFICATE_MODAL;
}
export interface ICheckIn {
  readonly type: typeof CHECK_IN;
}
export interface isInvalidInputPhoneValue {
  readonly type: typeof IS_INVALID_NAME;
}
export interface isInvalidInputNameValue {
  readonly type: typeof IS_INVALID_PHONE;
}
export interface isInvalidInputDateValue {
  readonly type: typeof IS_INVALID_DATE;
}
export interface isInvalidInputTimeValue {
  readonly type: typeof IS_INVALID_TIME;
}
export interface isValidInputPhoneValue {
  readonly type: typeof IS_VALID_PHONE;
}
export interface isValidInputNameValue {
  readonly type: typeof IS_VALID_NAME;
}
export interface ISetName {
  readonly type: typeof SET_NAME;
  name: string;
}
export interface IOpenCertificateModal {
  readonly type: typeof OPEN_CERTIFICATE_MODAL;
  id: string;
}
export interface ISetPhone {
  readonly type: typeof SET_PHONE;
  phone: string;
}
export interface ISetDate {
  readonly type: typeof SET_DATE;
  date: string;
}
export interface ISetTime {
  readonly type: typeof SET_TIME;
  time: string;
}
export interface ISetCertificateProps {
  readonly type: typeof SET_CERTIFICATE_PROPS;
  certificateProps: {
    width: number;
    offset: number;
  };
}
export interface ISetReviewProps {
  readonly type: typeof SET_REVIEW_PROPS;
  reviewProps: {
    width: number;
    offset: number;
    toggleReviewStatus: boolean;
  };
}
export interface ISetWindowSize {
  readonly type: typeof SET_WINDOW_SIZE;
  windowSizeProps: {
    width: number;
    height: number;
  };
}
export interface ISetWindowWidth {
  readonly type: typeof SET_WINDOW_WIDTH;
  windowWidthProps: {
    width: number;
  };
}
export interface ISetToggleReviewStatus {
  readonly type: typeof SET_TOGGLE_REVIEW_STATUS;
  toggleReviewStatus: boolean;
}
export interface ISetReviewReview {
  readonly type: typeof SET_REVIEW_REVIEW;
  review: string;
}
export interface ISetReviewAge {
  readonly type: typeof SET_REVIEW_AGE;
  age: string;
}
export interface ISetReviewName {
  readonly type: typeof SET_REVIEW_NAME;
  name: string;
}
export interface ISetReviewSex {
  readonly type: typeof SET_REVIEW_SEX;
  sex: { male: boolean; female: boolean };
}

export type ActionsTypes =
  | ISetLanguage
  | IOpenReviewModal
  | ICloseReviewModal
  | ICheckIn
  | isInvalidInputDateValue
  | isInvalidInputTimeValue
  | isInvalidInputPhoneValue
  | isValidInputPhoneValue
  | isInvalidInputNameValue
  | isValidInputNameValue
  | ISetName
  | ISetPhone
  | ISetDate
  | ISetTime
  | ICloseModal
  | ISetCertificateProps
  | ISetWindowSize
  | IOpenCertificateModal
  | ICloseCertificateModal
  | ISetReviewProps
  | ISetWindowWidth
  | ISetReviewReview
  | ISetReviewAge
  | ISetReviewName
  | ISetReviewSex
  | ISetToggleReviewStatus;
