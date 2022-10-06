import styled from 'styled-components';

import { Breadcrumbs } from '../components';
import image from '../assets/kam-idris-unsplash.jpg';

const AboutPage = () => {
  return (
    <main>
      <Breadcrumbs title="About" />
      <Wrapper className="section">
        <img src={image} alt="Modern bedroom" />
        <article>
          <div>
            <h2>Our Story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim neque
            magnam sed labore? Facere libero, rerum, asperiores perferendis
            suscipit dolorum est voluptas consequuntur totam recusandae nostrum
            accusantium! Ullam, excepturi rerum.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis suscipit, explicabo voluptatem neque reiciendis et modi
            deserunt id sit maxime, recusandae molestiae nostrum cum rerum
            minus, labore voluptas similique libero!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            deleniti repellendus vitae porro exercitationem corporis eos
            dolorum? Ullam, ad esse. Natus quae consequuntur harum unde
            consequatur eligendi impedit minima, iure quaerat assumenda alias,
            esse quisquam ad expedita quas magnam. Optio exercitationem
            voluptatem placeat, suscipit reprehenderit repudiandae hic nostrum
            minus ex?
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  min-height: calc(100vh - (5vh + 27rem));
  display: grid;
  align-content: center;
  gap: 5rem;

  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }

  p {
    line-height: 1.4;
    margin-top: 2rem;
    color: var(--color-grey-5);
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
