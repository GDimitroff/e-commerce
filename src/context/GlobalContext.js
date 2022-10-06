import React, { useContext, useReducer } from 'react';

import globalReducer from '../reducers/globalReducer';
import { TOGGLE_SIDEBAR } from '../actions';

const initialState = {
  isSidebarOpen: false,
};

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  return (
    <GlobalContext.Provider value={{ ...state, toggleSidebar }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export default GlobalProvider;
