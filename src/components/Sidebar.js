import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useGlobalContext } from '../context/GlobalContext';

import logo from '../assets/logo.png';
import { AiOutlineClose } from 'react-icons/ai';
import { links } from '../utils/constants';
import NavButtons from './NavButtons';

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useGlobalContext();

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
        <div className="sidebar-header">
          <img src={logo} alt="The Casa Décor" className="logo" />
          <button className="close-btn" type="button" onClick={toggleSidebar}>
            <AiOutlineClose />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          <li>
            <Link to="checkout">Checkout</Link>
          </li>
        </ul>
        <NavButtons className="nav-buttons" />
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color-grey-1);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }

  .sidebar-header {
    margin-top: 20vh;
    margin-bottom: 5rem;
  }

  .close-btn {
    position: absolute;
    top: 25px;
    right: 25px;
    font-size: 3rem;
    background: transparent;
    border-color: transparent;
    color: var(--color-grey-8);
    transition: var(--transition);
    cursor: pointer;
  }

  .close-btn:hover {
    color: var(--color-grey-6);
  }

  .logo {
    height: 50px;
  }

  .links {
    width: 100%;
    text-align: center;
    margin-bottom: 5rem;
  }

  .links a {
    display: block;
    font-size: 1.6rem;
    text-transform: uppercase;
    padding: 1.5rem;
    color: var(--color-grey-6);
    letter-spacing: var(--medium-spacing);
    transition: var(--transition);
  }

  .links a:hover {
    background: var(--color-grey-10);
    color: var(--color-grey-1);
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
