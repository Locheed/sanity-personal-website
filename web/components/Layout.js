import React from 'react';

import Nav from '../components/Nav';

const Layout = ({ title, children, links }) => {
  return (
    <>
      <header>
        {JSON.stringify(links, null, 2)}
        <Nav />
      </header>
      <div>{children}</div>
    </>
  );
};

export default Layout;
