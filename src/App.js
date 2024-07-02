// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from './styles/colors';
import HomePage from './pages/HomePage';
import RegisterSeller from './pages/RegisterSeller';
import RegisterBuyer from './pages/RegisterBuyer';

const AppContainer = styled.div`
  background-color: ${colors.offWhite};
  color: ${colors.darkBlue};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
`;

const Header = styled.h1`
  color: ${colors.blue};
`;

const Button = styled.button`
  background-color: ${colors.lightBlue};
  color: ${colors.beige};
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.blue};
    color: ${colors.offWhite};
  }
`;

const Home = () => (
  <AppContainer>
    <div>
      <Header>Welcome to Metr E-commerce</Header>
      <Link to="/home">
        <Button>Shop Now</Button>
      </Link>
    </div>
  </AppContainer>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register-seller" element={<RegisterSeller />} />
        <Route path="/register-buyer" element={<RegisterBuyer />} />
      </Routes>
    </Router>
  );
}

export default App;
