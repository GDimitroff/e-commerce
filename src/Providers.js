import { BrowserRouter as Router } from 'react-router-dom';

import AuthProvider from './context/AuthContext';
import GlobalProvider from './context/GlobalContext';
import ProductsProvider from './context/ProductsContext';
import FilterProvider from './context/FilterContext';
import CartProvider from './context/CartContext';

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <GlobalProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <Router>{children}</Router>
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </GlobalProvider>
    </AuthProvider>
  );
};

export default Providers;
