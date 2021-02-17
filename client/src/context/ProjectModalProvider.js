import { createContext, useReducer } from 'react';

import { TOGGLE_PROJECT_MODAL } from './types';

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

export const ProjectModalContext = createContext();

export const ProjectModalProvider = ({ children }) => {
  const initialState = [];

  const [state, dispatch] = useReducer(projectModalReducer, initialState);

  // Toggle modal action
  const toggleModalAction = (currentProject = null) => {
    dispatch({
      type: TOGGLE_PROJECT_MODAL,
      payload: currentProject,
    });
  };

  return (
    <ProjectModalContext.Provider
      value={{
        currentProject: state.currentProject,
        open: state.open,
        toggleModalAction,
      }}
    >
      {children}
    </ProjectModalContext.Provider>
  );
};
