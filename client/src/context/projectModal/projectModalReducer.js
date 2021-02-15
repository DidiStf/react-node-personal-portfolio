import { TOGGLE_PROJECT_MODAL } from '../types';

const initialState = {
  open: false,
  currentProject: null,
};

const projectModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PROJECT_MODAL: {
      return {
        ...state,
        open: !state.open,
        currentProject: action.payload,
      };
    }
    default:
      return state;
  }
};

export default projectModalReducer;
