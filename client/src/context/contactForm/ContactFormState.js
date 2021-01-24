import { useReducer } from "react";

import { sendContactEmail } from "../../api/contact";
import ContactFormContext from "./contactFormContext";
import contactFormReducer from "./contactFormReducer";
import {
  SET_CONTACT_ERROR,
  SET_CONTACT_LOADING,
  SET_CONTACT_SUCCESS,
  RESET_CONTACT_STATE,
} from "../types";

const ContactFormState = ({ children }) => {
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
      console.error("error:", error.response.data.message);
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

export default ContactFormState;
