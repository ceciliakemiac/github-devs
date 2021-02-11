import React from 'react';
import styled from 'styled-components';

import InputSearch from '../InputSearch/InputSearch';

const Navbar = styled.div`
  position: fixed;
  top: 0;
  display: block;
  overflow: hidden;
  width:100%;
  z-index: 5;
  height: 5em;
  background-color: #888;
`;

const NavBar = () => {
  return (
    <nav>
      <Navbar>
        <InputSearch />
      </Navbar>
    </nav>
  );
}

export default NavBar;
