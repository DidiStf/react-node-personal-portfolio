import { useReducer } from 'react';

import ProjectModalContext from './projectModalContext';
import projectModalReducer from './projectModalReducer';
import { TOGGLE_PROJECT_MODAL } from '../types';

const ProjectModalState = ({ children }) => {
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

export default ProjectModalState;
