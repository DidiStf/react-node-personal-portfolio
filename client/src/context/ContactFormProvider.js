import { createContext, useReducer } from 'react';

import { sendContactEmail } from '../api/contact';
import {
  RESET_CONTACT_STATE,
  SET_CONTACT_ERROR,
  SET_CONTACT_LOADING,
  SET_CONTACT_SUCCESS,
} from './types';

const initialState = {
  success: false,
  loading: false,
  error: false,
};

const contactFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACT_ERROR: {
      return {
        error: true,
        success: false,
        loading: false,
      };
    }
    case SET_CONTACT_SUCCESS: {
      return {
        error: false,
        success: true,
        loading: false,
      };
    }
    case SET_CONTACT_LOADING: {
      return {
        loading: true,
        error: false,
        success: false,
      };
    }
    case RESET_CONTACT_STATE: {
      return {
        loading: false,
        error: false,
        success: false,
      };
    }
    default:
      return state;
  }
};

export const ContactFormContext = createContext();

export const ContactFormProvider = ({ children }) => {
  const initialState = [];

  const [state, dispatch] = useReducer(contactFormReducer, initialState);

  // Send contact email action
  const sendContactEmailAction = async (contactData) => {
    dispatch({
      type: SET_CONTACT_LOADING,
    });
    try {
      await sendContactEmail(contactData);
      dispatch({
        type: SET_CONTACT_SUCCESS,
      });
    } catch (error) {
      console.error('error:', error.response.data.message);
      dispatch({
        type: SET_CONTACT_ERROR,
      });
    }
  };

  // Reset contact state
  const resetContactStateAction = () => {
    dispatch({
      type: RESET_CONTACT_STATE,
    });
  };

  return (
    <ContactFormContext.Provider
      value={{
        error: state.error,
        loading: state.loading,
        success: state.success,
        resetContactStateAction,
        sendContactEmailAction,
      }}
    >
      {children}
    </ContactFormContext.Provider>
  );
};
