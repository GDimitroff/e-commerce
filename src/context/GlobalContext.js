import React, { useContext, useReducer } from 'react';

import globalReducer from '../reducers/globalReducer';
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../actions';

const initialState = {
  isSidebarOpen: false,
};

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  return (
    <GlobalContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export default GlobalProvider;
