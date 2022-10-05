import { Routes, Route } from 'react-router-dom';
import {
  Home,
  Products,
  Product,
  Cart,
  Checkout,
  Error,
  About,
  Layout,
} from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default App;
