import styled from 'styled-components';
import { BsFillGridFill, BsList } from 'react-icons/bs';

import { useFilterContext } from '../context/FilterContext';

const Sort = () => {
  const {
    filteredProducts: products,
    gridView,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext();

  return (
    <Wrapper>
      <div className="btn-container">
        <button
          type="button"
          className={`${gridView ? 'active' : ''}`}
          onClick={setGridView}>
          <BsFillGridFill />
        </button>
        <button
          type="button"
          className={`${!gridView ? 'active' : ''}`}
          onClick={setListView}>
          <BsList />
        </button>
      </div>
      <p>{products.length} products found</p>
      <hr />
      <form>
        <label htmlFor="sort">sort by</label>
        <select
          name="sort"
          id="sort"
          className="sort-input"
          value={sort}
          onChange={updateSort}>
          <option value="price-lowest">Price (Lowest)</option>
          <option value="price-highest">Price (Highest)</option>
          <option value="name-a">Name (A-Z)</option>
          <option value="name-z">Name (Z-A)</option>
        </select>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.8rem;

    button {
      width: 2.2rem;
      height: 2.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-grey-1);
      background: transparent;
      border: 1px solid var(--color-grey-1);
      border-radius: var(--radius);
      cursor: pointer;

      svg {
        font-size: 1.6rem;
      }
    }

    .active {
      color: var(--color-grey-9);
      background: var(--color-grey-1);
    }
  }

  p {
    font-size: 1.4rem;
  }

  .sort-input {
    border-color: transparent;
    font-size: 1.4rem;
    text-transform: capitalize;
    padding: 0.4rem 0.8rem;
    font-weight: 700;
  }

  label {
    font-size: 1.4rem;
    text-transform: capitalize;
  }

  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;

    hr {
      margin: 0;
    }

    .btn-container {
      width: 50px;
    }

    label {
      display: inline-block;
      margin-right: 0.6rem;
    }
  }

  @media (min-width: 768px) {
    column-gap: 2rem;
  }
`;

export default Sort;
