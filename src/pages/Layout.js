import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import { Navbar, Sidebar, Footer } from '../components';

const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Layout;
