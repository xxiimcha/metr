// src/components/LoginModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import colors from '../styles/colors';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

Modal.setAppElement('#root');

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${colors.offWhite};
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
`;

const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${colors.darkBlue};

  &:hover {
    color: ${colors.blue};
  }
`;

const Title = styled.h2`
  color: ${colors.darkBlue};
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid ${colors.lightBlue};
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
`;

const LoginButton = styled.button`
  padding: 10px;
  margin-top: 10px;
  background-color: ${colors.blue};
  color: ${colors.offWhite};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: ${colors.darkBlue};
  }
`;

const LoginModal = ({ isOpen, onRequestClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { email: email.trim(), password: password.trim() });
      const { userType } = response.data;
      if (userType === 'buyer') {
        navigate('/buyer-dashboard');
      } else if (userType === 'seller') {
        navigate('/seller-dashboard');
      }
    } catch (error) {
      alert('Invalid email or password');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },
        content: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          inset: '0',
          padding: '0',
          border: 'none',
          background: 'none'
        }
      }}
    >
      <ModalContent>
        <CloseButton onClick={onRequestClose}>&times;</CloseButton>
        <Title>Login</Title>
        <Form onSubmit={handleLogin}>
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <LoginButton type="submit">Login</LoginButton>
        </Form>
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
