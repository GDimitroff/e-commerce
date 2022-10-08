import styled from 'styled-components';
import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { useProductsContext } from '../context/ProductsContext';
import { PRODUCT_URL as URL } from '../utils/constants';
import { formatPrice } from '../utils/helpers';
import {
  Loading,
  Error,
  ProductImages,
  Stars,
  Breadcrumbs,
  AddToCart,
} from '../components';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    productLoading: loading,
    productError: error,
    product,
    fetchProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchProduct(`${URL}${id}ss`);
  }, [id]);

  useEffect(() => {
    // if (error) {
    //   setTimeout(() => {
    //     navigate('/');
    //   }, 3000);
    // }
  }, [error, navigate]);

  if (loading) {
    return (
      <FullPageWrapper>
        <Loading />
      </FullPageWrapper>
    );
  }

  if (error) {
    return (
      <FullPageWrapper>
        <Error />
      </FullPageWrapper>
    );
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: productId,
    company,
    images,
  } = product;
  return (
    <Wrapper>
      <Breadcrumbs title={name} product />
      <div className="section">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          <ProductImages images={images} />
          <section className="content">
            <h2>{name}</h2>
            <Stars />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available: </span>
              {stock > 0 ? 'In stock' : 'Out of stock'}
            </p>
            <p className="info">
              <span>SKU: </span>
              {productId}
            </p>
            <p className="info">
              <span>Brand: </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .section {
    min-height: calc(
      100vh -
        (
          var(--navbar-height) + var(--breadcrumbs-height) +
            var(--footer-height) + 10rem
        )
    );
  }

  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }

  .price {
    color: var(--color-primary-5);
  }

  .desc {
    line-height: 1.5;
  }

  .info {
    text-transform: capitalize;
    display: flex;
    gap: 18px;

    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }

    .price {
      font-size: 1.6rem;
    }
  }
`;

const FullPageWrapper = styled.div`
  min-height: calc(100vh - (var(--navbar-height) + var(--footer-height)));
  display: grid;
  place-items: center;
`;

export default ProductPage;
