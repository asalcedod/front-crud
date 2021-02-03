import React from 'react';
import NavMenu from './NavMenu';

const Layout = (props) => {

  return (
    <div>
      <NavMenu />
      <div className="home">
        {props.children}
      </div>
    </div>
  );
}

export default Layout
