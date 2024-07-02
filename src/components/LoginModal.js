// src/components/LoginModal.js
import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import colors from '../styles/colors';

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
`;

const Input = styled.input`
  padding: 10px;
  margin: 5px 0;
  border: 1px solid ${colors.lightBlue};
  border-radius: 5px;
`;

const LoginButton = styled.button`
  padding: 10px;
  margin-top: 10px;
  background-color: ${colors.blue};
  color: ${colors.offWhite};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.darkBlue};
  }
`;

const LoginModal = ({ isOpen, onRequestClose }) => {
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
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <LoginButton>Login</LoginButton>
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
