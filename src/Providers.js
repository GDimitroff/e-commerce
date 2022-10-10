import { BrowserRouter as Router } from 'react-router-dom';

import GlobalProvider from './context/GlobalContext';
import ProductsProvider from './context/ProductsContext';
import FilterProvider from './context/FilterContext';
import CartProvider from './context/CartContext';

const Providers = ({ children }) => {
  return (
    <GlobalProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <Router>{children}</Router>
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </GlobalProvider>
  );
};

export default Providers;
