// src/components/Header.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../styles/colors';
import LoginModal from './LoginModal';

const HeaderContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${colors.darkBlue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.offWhite};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const NavLink = styled(Link)`
  color: ${colors.offWhite};
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: ${colors.lightBlue};
  }
`;

const ButtonLink = styled.button`
  background: none;
  border: none;
  color: ${colors.offWhite};
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  position: relative;

  &:hover {
    color: ${colors.lightBlue};
  }

  &:hover .dropdown {
    display: block;
  }
`;

const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${colors.darkBlue};
  border: 1px solid ${colors.lightBlue};
  border-radius: 5px;
  overflow: hidden;

  ${NavLink} {
    display: block;
    padding: 10px;
    white-space: nowrap;

    &:hover {
      background-color: ${colors.blue};
    }
  }
`;

const Header = () => {
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);

  return (
    <HeaderContainer>
      <h1>Metr</h1>
      <NavLinks>
        <ButtonLink onClick={() => setLoginModalIsOpen(true)}>Login</ButtonLink>
        <ButtonLink>
          Register
          <DropdownMenu className="dropdown">
            <NavLink to="/register-seller">Seller</NavLink>
            <NavLink to="/register-buyer">Buyer</NavLink>
          </DropdownMenu>
        </ButtonLink>
      </NavLinks>
      <LoginModal isOpen={loginModalIsOpen} onRequestClose={() => setLoginModalIsOpen(false)} />
    </HeaderContainer>
  );
};

export default Header;
