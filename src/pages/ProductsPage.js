import { useFilterContext } from '../context/FilterContext';

const ProductsPage = () => {
  const data = useFilterContext();
  console.log(data.filteredProducts);
  return <h4>products page</h4>;
};

export default ProductsPage;
