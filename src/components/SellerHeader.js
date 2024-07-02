import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${colors.darkBlue};
  color: ${colors.offWhite};
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const Username = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: ${colors.lightBlue};
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  right: 0;

  ${Username}:hover & {
    display: block;
  }
`;

const DropdownItem = styled(Link)`
  color: ${colors.offWhite};
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;

  &:hover {
    background-color: ${colors.blue};
  }
`;

const SellerHeader = ({ username }) => {
  return (
    <HeaderContainer>
      <h1>Seller Dashboard</h1>
      <Username>
        {username}
        <DropdownContent>
          <DropdownItem to="/logout">Logout</DropdownItem>
        </DropdownContent>
      </Username>
    </HeaderContainer>
  );
};

export default SellerHeader;
