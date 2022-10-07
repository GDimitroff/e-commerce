import styled from 'styled-components';

const Error = () => {
  return (
    <Wrapper className="section">
      <h4>There was an error loading the featured products...</h4>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  padding: 2rem;
  color: var(--color-grey-10);
  background-color: var(--color-red-light);
  border-radius: var(--radius);
`;

export default Error;
