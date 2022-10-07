import styled from 'styled-components';

import { services } from '../utils/constants';

const Services = () => {
  return (
    <Wrapper>
      <div className="section">
        <article className="header">
          <h3>
            custom furniture <br />
            built only for you
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ipsum
            quisquam id expedita ullam, tempore, molestiae fugiat optio illum,
            eligendi est perspiciatis assumenda! Natus nihil voluptatibus dicta
            quis, dignissimos dolor.
          </p>
        </article>
        <div className="services-center">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article key={id} className="service">
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 1rem 0;
  background: var(--color-primary-9);

  h3 {
    color: var(--color-grey-4);
    line-height: 1.1;
  }

  h4 {
    color: var(--color-grey-7);
    margin-bottom: 1rem;
  }

  .header h3 {
    margin-bottom: 3rem;
  }

  p {
    line-height: 1.2;
    color: var(--color-grey-6);
  }

  .services-center {
    margin-top: 3rem;
    display: grid;
    gap: 3rem;
  }

  .service {
    background: var(--color-grey-1);
    text-align: center;
    padding: 3rem 2rem;
    border-radius: var(--radius);

    p {
      color: var(--color-grey-6);
      line-height: 1.4;
    }
  }

  span {
    width: 6rem;
    height: 6rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 2rem;
    border-radius: 50%;
    background: var(--color-primary-5);
    color: var(--color-grey-1);

    svg {
      font-size: 3.8rem;
    }
  }

  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }

  @media (min-width: 1280px) {
    padding: 0;

    .section {
      transform: translateY(5rem);
    }
  }
`;

export default Services;
