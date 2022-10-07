import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ title }) => {
  return (
    <Wrapper>
      <div className="breadcrumbs-container">
        <p>
          <Link to="/">Home</Link> / {title}
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--color-grey-9);
  height: var(--breadcrumbs-height);
  display: flex;
  align-items: center;
  color: var(--color-grey-1);

  .breadcrumbs-container {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  @media screen and (min-width: 992px) {
    .breadcrumbs-container {
      width: 95vw;
    }
  }

  p {
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: var(--small-spacing);
  }

  a {
    color: var(--color-grey-4);
    padding: 0.5rem;
    transition: var(--transition);
  }

  a:hover {
    color: var(--color-grey-6);
  }
`;

export default Breadcrumbs;
