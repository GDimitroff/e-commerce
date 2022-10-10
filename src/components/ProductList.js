import { useFilterContext } from '../context/FilterContext';
import { useProductsContext } from '../context/ProductsContext';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
  const { productsLoading: loading } = useProductsContext();
  const { filteredProducts: products, gridView } = useFilterContext();

  if (loading) {
    return <h4>Loading...</h4>;
  }

  if (products.length < 1) {
    return <h4>Sorry, no products matched your search...</h4>;
  }

  if (gridView === false) {
    return <ListView products={products} />;
  }

  return <GridView products={products} />;
};

export default ProductList;
