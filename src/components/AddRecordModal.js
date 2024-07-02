import React, { useState } from 'react';
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
  max-width: 500px;
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

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid ${colors.lightBlue};
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
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

const AddRecordModal = ({ isOpen, onRequestClose, onAddRecord }) => {
  const [productName, setProductName] = useState('');
  const [modelNumber, setModelNumber] = useState('');
  const [price, setPrice] = useState('');
  const [pictures, setPictures] = useState([]);

  const handleAddRecord = () => {
    const newRecord = { productName, modelNumber, price, pictures };
    onAddRecord(newRecord);
    onRequestClose();
  };

  const handleFileChange = (event) => {
    setPictures([...event.target.files]);
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
        <Title>Add New Record</Title>
        <Input 
          type="text" 
          placeholder="Product Name" 
          value={productName} 
          onChange={(e) => setProductName(e.target.value)} 
          required 
        />
        <Input 
          type="text" 
          placeholder="Model Number" 
          value={modelNumber} 
          onChange={(e) => setModelNumber(e.target.value)} 
          required 
        />
        <Input 
          type="number" 
          placeholder="Price" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          required 
        />
        <Input 
          type="file" 
          multiple 
          onChange={handleFileChange} 
        />
        <Button onClick={handleAddRecord}>Add Record</Button>
      </ModalContent>
    </Modal>
  );
};

export default AddRecordModal;
