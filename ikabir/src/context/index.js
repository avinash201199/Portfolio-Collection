import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import redcuer, { initialState } from "./reducer";
import getActions from "./actions";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(redcuer, initialState);
  const actions = getActions(dispatch);

  return <AppContext.Provider value={{ state, actions }}>{children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
  children: PropTypes.node
};

export { AppContext, AppContextProvider };
