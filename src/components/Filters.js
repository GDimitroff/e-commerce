import styled from 'styled-components';

import { useFilterContext } from '../context/FilterContext';
import { getUniqueValues, formatPrice } from '../utils/helpers';
import { FaCheck } from 'react-icons/fa';

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      minPrice,
      price,
      maxPrice,
      shipping,
    },
    updateFilters,
    clearFilters,
    allProducts,
  } = useFilterContext();

  const categories = getUniqueValues(allProducts, 'category');
  const companies = getUniqueValues(allProducts, 'company');
  const colors = getUniqueValues(allProducts, 'colors');

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="Search..."
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* categories */}
          <div className="form-control">
            <h4>Category</h4>
            <div>
              {categories.map((c, index) => {
                return (
                  <button
                    className={`${
                      category === c.toLowerCase() ? 'active' : ''
                    }`}
                    key={index}
                    onClick={updateFilters}
                    name="category"
                    type="button">
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          {/* companies */}
          <div className="form-control">
            <h4>Company</h4>
            <select
              name="company"
              id="company"
              value={company}
              onChange={updateFilters}
              className="company">
              {companies.map((c, index) => {
                return (
                  <option value={c} key={index}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* colors */}
          <div className="form-control">
            <h4>Colors</h4>
            <div className="colors">
              {colors.map((c, index) => {
                if (c === 'all') {
                  return (
                    <button
                      key={index}
                      name="color"
                      onClick={updateFilters}
                      data-color="all"
                      className={`${
                        color === 'all' ? 'all-btn active' : 'all-btn'
                      }`}>
                      All
                    </button>
                  );
                }

                return (
                  <button
                    key={index}
                    name="color"
                    style={{ background: c }}
                    className={`${
                      color === c ? 'color-btn active' : 'color-btn'
                    }`}
                    data-color={c}
                    onClick={updateFilters}>
                    {color === c && <FaCheck />}
                  </button>
                );
              })}
            </div>
          </div>
          {/* price */}
          <div className="form-control">
            <h4>Price</h4>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              id="price"
              onChange={updateFilters}
              min={minPrice}
              max={maxPrice}
              value={price}
            />
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.8rem;

    h4 {
      margin-bottom: 0.4rem;
    }
  }

  .search-input {
    font-family: inherit;
    padding: 0.4rem;
    background: var(--color-grey-9);
    border-radius: var(--radius);
    border-color: transparent;
  }

  button {
    font-family: inherit;
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--color-grey-5);
    cursor: pointer;
  }

  .active {
    border-color: var(--color-grey-5);
  }

  .company {
    font-family: inherit;
    background: var(--color-grey-9);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.4rem;
  }

  .colors {
    display: flex;
    align-items: center;
  }

  .color-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    opacity: 0.5;
    cursor: pointer;

    svg {
      font-size: 1rem;
      color: var(--color-grey-9);
    }
  }

  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }

  .active {
    opacity: 1;
  }

  .all-btn .active {
    text-decoration: underline;
  }

  .price {
    font-size: 1.6rem;
  }

  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
    max-width: 200px;
  }

  .clear-btn {
    background: var(--color-red-dark);
    color: var(--color-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }

  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 2rem;
    }
  }
`;

export default Filters;
