import { BrowserRouter as Router } from 'react-router-dom';

import GlobalProvider from './context/GlobalContext';

const Providers = ({ children }) => {
  return (
    <GlobalProvider>
      <Router>{children}</Router>
    </GlobalProvider>
  );
};

export default Providers;
