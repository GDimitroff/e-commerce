import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useGlobalContext } from '../context/GlobalContext';

import logo from '../assets/logo.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { links } from '../utils/constants';
import NavButtons from './NavButtons';

const Nav = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="The Casa Décor" />
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <AiOutlineMenu />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
        <NavButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: var(--navbar-height);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0f172a;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 200px;
    }
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--color-primary-5);
    cursor: pointer;

    svg {
      font-size: 2.6rem;
    }
  }

  .nav-links {
    display: none;
  }

  .nav-buttons-wrapper {
    display: none;
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }

    .nav-center {
      width: 95vw;
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }

    .nav-links {
      display: flex;
      justify-content: center;
      gap: 18px;

      a {
        color: var(--color-grey-6);
        font-size: 1.6rem;
        text-transform: uppercase;
        letter-spacing: var(--medium-spacing);
        padding: 0.6rem;
        border-bottom: 2px solid transparent;
        transition: var(--transition);

        &:hover {
          border-bottom: 2px solid var(--color-primary-5);
        }
      }
    }

    .nav-buttons-wrapper {
      display: flex;
    }
  }
`;

export default Nav;
