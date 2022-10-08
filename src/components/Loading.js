import styled from 'styled-components';

const Loading = () => {
  return (
    <Wrapper className="section">
      <div className="loading"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  place-items: center;

  .loading {
    width: 8rem;
    height: 8rem;
    margin: 0 auto;
    border-radius: 50%;
    border: 4px solid #ccc;
    border-top-color: var(--color-grey-1);
    animation: spinner 0.6s linear infinite;
  }
`;

export default Loading;
