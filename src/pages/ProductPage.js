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
  Rating,
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
    fetchProduct(`${URL}${id}`);
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
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
            <Rating stars={stars} reviews={reviews} />
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
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  h2 {
    text-transform: capitalize;
    margin-bottom: 0.6rem;
  }

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
    gap: 3rem;
    margin-top: 2rem;
  }

  .price {
    color: var(--color-primary-1);
    font-size: 1.6rem;
  }

  .desc {
    font-size: 1.4rem;
    line-height: 1.8;
    margin: 1rem 0;
  }

  .info {
    font-size: 1.4rem;
    text-transform: capitalize;
    display: flex;

    span {
      font-weight: 700;
      min-width: 100px;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

const FullPageWrapper = styled.div`
  min-height: calc(100vh - (var(--navbar-height) + var(--footer-height)));
  display: grid;
  place-items: center;
`;

export default ProductPage;
