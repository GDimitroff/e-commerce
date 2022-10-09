import { useFilterContext } from '../context/FilterContext';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
  const { filteredProducts: products, gridView } = useFilterContext();

  if (products.length < 1) {
    return <h4>Sorry, no products matched your search...</h4>;
  }

  if (gridView === false) {
    return <ListView products={products} />;
  }

  return <GridView products={products} />;
};

export default ProductList;
