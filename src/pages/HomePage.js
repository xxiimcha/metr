// src/pages/HomePage.js
import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import Header from '../components/Header';

const HomePageContainer = styled.div`
  background-color: ${colors.offWhite};
  color: ${colors.darkBlue};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  color: ${colors.blue};
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const ProductCard = styled.div`
  background-color: ${colors.lightBlue};
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  color: ${colors.offWhite};
`;

const products = [
  { id: 1, name: 'Product 1', description: 'Description of Product 1' },
  { id: 2, name: 'Product 2', description: 'Description of Product 2' },
  { id: 3, name: 'Product 3', description: 'Description of Product 3' },
];

const HomePage = () => {
  return (
    <HomePageContainer>
      <Header />
      <Title>Welcome to Metr</Title>
      <ProductGrid>
        {products.map(product => (
          <ProductCard key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </ProductCard>
        ))}
      </ProductGrid>
    </HomePageContainer>
  );
};

export default HomePage;
