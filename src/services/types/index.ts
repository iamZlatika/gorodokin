import { store } from "../../index";
import { ActionsTypes } from "../actions";
import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";

export type RootState = ReturnType<typeof store.getState>;

type TApplicationActions = ActionsTypes;

export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, TApplicationActions>>;

export type AppDispatch = typeof store.dispatch;

export interface ILocalisation {
  langPacks: {
    en: {};
    ru: {};
    ua: {};
  };
}
