import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import Header from '../components/Header';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

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

const ProductCard = styled(Link)` // Use Link to wrap the card
  background-color: ${colors.lightBlue};
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  color: ${colors.offWhite};
  text-decoration: none;

  &:hover {
    background-color: ${colors.blue};
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/inventory');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <HomePageContainer>
      <Header />
      <Title>Welcome to Metr</Title>
      <ProductGrid>
        {products.map(product => (
          <ProductCard key={product._id} to={`/product/${product._id}`}>
            <ProductImage src={`http://localhost:5000/${product.pictures[0]}`} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.modelNumber}</p>
            <p>${product.price.toFixed(2)}</p>
          </ProductCard>
        ))}
      </ProductGrid>
    </HomePageContainer>
  );
};

export default HomePage;
