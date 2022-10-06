import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <Wrapper className="section">
      <article className="content">
        <h1>
          design <br />
          comfort zone
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
          excepturi officia cum nesciunt, vero cumque, libero nobis accusantium
          est non saepe nemo id doloribus, fugiat quam quia laboriosam eos
          consequuntur!
        </p>
        <Link to="products" className="btn">
          SHOP NOW
        </Link>
      </article>
      <article className="img-container">
        <img
          src="https://via.placeholder.com/500/ff0000"
          alt=""
          className="main-img"
        />
        <img
          src="https://via.placeholder.com/200/ffff00"
          alt=""
          className="accent-img"
        />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  gap: 3rem;

  .img-container {
    display: none;
  }

  p {
    line-height: 1.4;
    margin-bottom: 2rem;
    color: var(--color-grey-5);
  }

  @media (min-width: 992px) {
    height: calc(100vh - 20rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;

    h1 {
      line-height: 1.2;
      margin-bottom: 3rem;
    }

    .img-container {
      position: relative;
      display: block;
    }

    .main-img {
      position: relative;
      display: block;
      width: 100%;
      height: 500px;
      border-radius: var(--radius);
      object-fit: cover;
    }

    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 200px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }

    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--color-grey-1);
      bottom: 0%;
      left: -10%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
