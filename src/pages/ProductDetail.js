import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import LoginModal from '../components/LoginModal';

const ProductDetailContainer = styled.div`
  background-color: ${colors.offWhite};
  color: ${colors.darkBlue};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProductDetailContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center; /* Center the content horizontally */
  max-width: 1000px;
  width: 100%;
  gap: 20px;
`;

const ProductImage = styled.img`
  width: 500px; /* Increase the width of the image */
  height: auto;
  margin-top: 10px;
  border-radius: 10px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const Title = styled.h1`
  color: ${colors.blue};
  margin-bottom: 20px;
`;

const ModelNumber = styled.p`
  color: ${colors.darkBlue};
  margin-bottom: 10px;
`;

const Price = styled.p`
  color: ${colors.blue};
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Description = styled.p`
  color: ${colors.darkBlue};
  margin-bottom: 20px;
`;

const OrderButton = styled.button`
  padding: 10px 20px;
  background-color: ${colors.blue};
  color: ${colors.offWhite};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.darkBlue};
  }
`;

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add state for login status
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // Add state for modal visibility

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/inventory/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const handleOrderClick = () => {
    if (!isLoggedIn) {
      setIsLoginModalOpen(true);
    } else {
      // Proceed with the order
      alert('Order placed successfully!');
    }
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <ProductDetailContainer>
      <Header />
      <ProductDetailContent>
        <ProductImage src={`http://localhost:5000/${product.pictures[0]}`} alt={product.name} />
        <ProductInfo>
          <Title>{product.name}</Title>
          <ModelNumber>Model: {product.modelNumber}</ModelNumber>
          <Price>${product.price.toFixed(2)}</Price>
          <Description>{product.description}</Description>
          <OrderButton onClick={handleOrderClick}>Order</OrderButton>
        </ProductInfo>
      </ProductDetailContent>
      <LoginModal isOpen={isLoginModalOpen} onRequestClose={() => setIsLoginModalOpen(false)} />
    </ProductDetailContainer>
  );
};

export default ProductDetail;
