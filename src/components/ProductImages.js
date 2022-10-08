import styled from 'styled-components';
import { useState } from 'react';

const ProductImages = ({ images }) => {
  const [main, setMain] = useState(images[0]);

  return (
    <Wrapper>
      <img src={main.url} alt="Primary" className="main" />
      <div className="gallery">
        {images.map((image, index) => {
          return (
            <img
              className={`${image.url === main.url ? 'active' : ''}`}
              src={image.url}
              alt={image.filename}
              key={image.id}
              onClick={() => setMain(images[index])}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    height: 500px;
  }

  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }

  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;

    img {
      height: 100px;
      cursor: pointer;
    }
  }

  .active {
    box-shadow: 0px 0px 0px 2px var(--color-grey-1);
  }

  @media (max-width: 576px) {
    .main {
      height: 300px;
    }

    .gallery {
      img {
        height: 50px;
      }
    }
  }

  @media (min-width: 992px) {
    .main {
      height: 450px;
    }

    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default ProductImages;
