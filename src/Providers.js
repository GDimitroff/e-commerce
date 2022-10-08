import { BrowserRouter as Router } from 'react-router-dom';

import GlobalProvider from './context/GlobalContext';
import ProductsProvider from './context/ProductsContext';
import FilterProvider from './context/FilterContext';

const Providers = ({ children }) => {
  return (
    <GlobalProvider>
      <ProductsProvider>
        <FilterProvider>
          <Router>{children}</Router>
        </FilterProvider>
      </ProductsProvider>
    </GlobalProvider>
  );
};

export default Providers;
