import { useFilterContext } from '../context/FilterContext';
import GridView from './GridView';

const ProductList = () => {
  const { filteredProducts: products } = useFilterContext();

  return <GridView products={products} />;
};

export default ProductList;
