import styled from 'styled-components';

import { Link } from 'react-router-dom';
import mainImage from '../assets/linus-mimietz-unsplash-main-image.jpg';
import accentImage from '../assets/davide-cantelli-unsplash-accent-image.jpg';

const Hero = () => {
  return (
    <Wrapper className="section">
      <article className="content">
        <h1>
          The Furniture
          <br />
          That Defines <span className="yellow">You</span>
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
        <img src={mainImage} alt="" className="main-img" />
        <img src={accentImage} alt="" className="accent-img" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: calc(100vh - (var(--navbar-height) + 10rem));
  display: grid;
  align-items: center;
  text-align: center;
  background-color: var(--color-grey-9);
  padding: 2rem;
  border-radius: var(--radius);

  .img-container {
    display: none;
  }

  h1 {
    font-size: 3.8rem;
    line-height: 1.1;
    margin-bottom: 3rem;
  }

  p {
    line-height: 1.4;
    margin-bottom: 3rem;
    color: var(--color-grey-5);
  }

  @media (min-width: 992px) {
    grid-template-columns: 2fr 3fr;
    text-align: initial;
    justify-items: end;
    padding: 5rem;

    h1 {
      font-size: 5.2rem;
    }

    p {
      font-size: 1.8rem;
    }

    .img-container {
      position: relative;
      display: block;
    }

    .main-img {
      position: relative;
      display: block;
      width: 450px;
      height: 500px;
      border-radius: var(--radius);
      object-fit: cover;
      box-shadow: var(--dark-shadow);
    }

    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 160px;
      width: 270px;
      transform: translateX(-50%);
      border-radius: var(--radius);
      object-fit: cover;
      box-shadow: var(--light-shadow);
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
