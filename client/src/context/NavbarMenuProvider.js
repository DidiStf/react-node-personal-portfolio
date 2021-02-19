import { createContext, useReducer } from 'react';

import { TOGGLE_MENU } from './types';

const navbarMenuReducer = (state, action) => {
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

export const NavbarMenuContext = createContext();

export const NavbarMenuProvider = ({ children }) => {
  const initialState = {
    open: false,
  };

  const [state, dispatch] = useReducer(navbarMenuReducer, initialState);

  // Toggle menu action
  const toggleMenuAction = () => {
    dispatch({
      type: TOGGLE_MENU,
    });
  };

  return (
    <NavbarMenuContext.Provider
      value={{
        open: state.open,
        toggleMenuAction,
      }}
    >
      {children}
    </NavbarMenuContext.Provider>
  );
};
