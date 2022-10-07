import { GiCompass, GiCutDiamond, GiProgression } from 'react-icons/gi';

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: 'about',
  },
  {
    id: 3,
    text: 'products',
    url: 'products',
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'Mission',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: <GiCutDiamond />,
    title: 'Vision',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: <GiProgression />,
    title: 'History',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
];

export const PRODUCTS_URL = 'https://course-api.com/react-store-products';

export const SINGLE_PRODUCT_URL = `https://course-api.com/react-store-single-product?id=`;
