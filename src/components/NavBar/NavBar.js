import React, { useEffect } from 'react';
import styled from 'styled-components';

const Navbar = styled.div`
  position: fixed;
  top: 0;
  display: block;
  overflow: hidden;
  width:100%;
  z-index: 5;
  height: 5em;
  background-color: #8888;
`;

function NavBar() {

  return (
    <nav>
      <Navbar>
        <h2>Procure seu dev do github!</h2>
      </Navbar>
    </nav>
  );
}

export default NavBar;
