import { TOGGLE_MENU } from '../types';

const initialState = {
    open: false,
}

const navbarMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU: {
      return {
          ...state,
          open: !state.open,
      };
    }
    default:
      return state;
  }
};

export default navbarMenuReducer;