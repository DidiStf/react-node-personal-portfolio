import {
  RESET_CONTACT_STATE,
  SET_CONTACT_ERROR,
  SET_CONTACT_LOADING,
  SET_CONTACT_SUCCESS,
} from "../types";

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

export default contactFormReducer;
