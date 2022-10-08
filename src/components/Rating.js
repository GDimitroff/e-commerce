import styled from 'styled-components';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Rating = ({ stars, reviews }) => {
  const starsList = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <Wrapper>
      <div className="stars">{starsList}</div>
      <p className="reviews">({reviews} customer reviews)</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.6rem;

  span {
    color: var(--color-primary-5);
    font-size: 1.4rem;
    margin-right: 0.4rem;
  }

  p {
    font-size: 1.4rem;
    margin-left: 0.8rem;
  }
`;

export default Rating;
