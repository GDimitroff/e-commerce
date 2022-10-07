import { BrowserRouter as Router } from 'react-router-dom';

import GlobalProvider from './context/GlobalContext';
import ProductsProvider from './context/ProductsContext';

const Providers = ({ children }) => {
  return (
    <GlobalProvider>
      <ProductsProvider>
        <Router>{children}</Router>
      </ProductsProvider>
    </GlobalProvider>
  );
};

export default Providers;
