import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <h5>
        <span>The Casa Décor</span> &copy; {new Date().getFullYear()}
      </h5>
      <h5>All rights reserved</h5>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: var(--footer-height);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: var(--color-grey-1);

  span {
    color: var(--color-primary-5);
  }

  h5 {
    color: var(--color-grey-6);
    margin: 0.2rem;

    font-weight: 500;
    text-transform: none;
    line-height: 1.25;
  }

  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Footer;
