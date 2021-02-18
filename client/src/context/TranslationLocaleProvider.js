import { createContext, useReducer } from 'react';

import { LOCALES } from '../assets/translations/constants';
import { RESET_LOCALE, SET_LOCALE } from './types';

const translationLocaleReducer = (state, action) => {
  switch (action.type) {
    case RESET_LOCALE: {
      return {
        ...state,
        locale: LOCALES.ENGLISH,
      };
    }
    case SET_LOCALE: {
      return {
        ...state,
        locale: action.payload,
      };
    }
    default:
      return state;
  }
};

export const TranslationLocaleContext = createContext();

export const TranslationLocaleProvider = ({ children }) => {
  const preferredLocale = window.localStorage.getItem('locale');
  const initialState = {
    locale: preferredLocale !== null ? preferredLocale : LOCALES.ENGLISH,
  };

  const [state, dispatch] = useReducer(translationLocaleReducer, initialState);

  const resetLocaleAction = () => {
    dispatch({
      type: RESET_LOCALE,
    });
    window.localStorage.removeItem('locale');
  };

  const setLocaleAction = (locale) => {
    dispatch({
      type: SET_LOCALE,
      payload: locale,
    });
    window.localStorage.setItem('locale', locale);
  };

  return (
    <TranslationLocaleContext.Provider
      value={{
        locale: state.locale,
        resetLocaleAction,
        setLocaleAction,
      }}
    >
      {children}
    </TranslationLocaleContext.Provider>
  );
};
