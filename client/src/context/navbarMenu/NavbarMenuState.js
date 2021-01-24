import { useReducer } from "react";

import NavbarMenuContext from "./navbarMenuContext";
import navbarMenuReducer from "./navbarMenuReducer";
import { TOGGLE_MENU } from "../types";

const NavbarMenuState = ({ children }) => {
  const initialState = [];

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

export default NavbarMenuState;
