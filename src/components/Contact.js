import styled from 'styled-components';

const Contact = () => {
  return (
    <Wrapper>
      <div className="section">
        <h3>Join our newsletter and get 20% off</h3>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae
            delectus magnam ratione adipisci, quia ipsam eligendi nostrum
            molestiae a.
          </p>
          <form className="contact-form">
            <input
              type="email"
              className="form-input"
              placeholder="Enter your email..."
            />
            <button type="submit" className="btn btn-submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 1rem 0;

  h3 {
    margin-bottom: 2rem;
    color: var(--color-grey-3);
  }

  p {
    line-height: 1.4;
    color: var(--color-grey-4);
  }

  .contact-form {
    max-width: 900px;
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 2rem;
  }

  .form-input,
  .btn-submit {
    font-size: 1.4rem;
    padding: 0.8rem 1.6rem;
    border: 2px solid var(--color-grey-1);
  }

  .form-input {
    font-family: inherit;
    border: 2px solid var(--color-grey-1);
    border-radius: var(--radius);
    color: var(--color-grey-3);
    margin-bottom: 1rem;
    outline: none;
  }

  .form-input:focus {
    background-color: var(--color-grey-9);
  }

  .form-input::placeholder {
    color: var(--color-grey-1);
  }

  @media (min-width: 576px) {
    .contact-form {
      grid-template-columns: 1fr auto;
    }

    .form-input {
      margin-bottom: 0rem;
      border-right: none;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    .btn-submit {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  @media (min-width: 992px) {
    padding: 10rem 0;

    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 5rem;
    }

    .contact-form {
      margin-top: 0rem;
    }
  }
`;

export default Contact;
