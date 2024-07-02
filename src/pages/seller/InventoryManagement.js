import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import AddRecordModal from '../../components/AddRecordModal';
import axios from 'axios'; // Import axios for making HTTP requests

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  color: ${colors.darkBlue};
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  border: 1px solid ${colors.lightBlue};
  padding: 10px;
  background-color: ${colors.blue};
  color: ${colors.offWhite};
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${colors.lightBlue};
  }
`;

const TableCell = styled.td`
  border: 1px solid ${colors.lightBlue};
  padding: 10px;
`;

const Button = styled.button`
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

const InventoryManagement = () => {
  const [inventory, setInventory] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchInventory = async () => {
    try {
      const response = await axios.get('http://localhost:5000/inventory'); // Adjust the URL to match your backend
      setInventory(response.data);
    } catch (error) {
      console.error('Error fetching inventory:', error);
    }
  };

  const handleAddRecord = async (newRecord) => {
    try {
      console.log('Sending new inventory item:', newRecord);
      const response = await axios.post('http://localhost:5000/inventory/add', newRecord);
      setInventory([...inventory, response.data]);
    } catch (error) {
      console.error('Error adding new record:', error);
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  return (
    <Container>
      <Title>Inventory Management</Title>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>ID</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Model Number</TableHeader>
            <TableHeader>Price</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {inventory.map(item => (
            <TableRow key={item._id}>
              <TableCell>{item._id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.modelNumber}</TableCell>
              <TableCell>${item.price.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <Button onClick={() => setIsModalOpen(true)}>Add New Record</Button>
      <AddRecordModal 
        isOpen={isModalOpen} 
        onRequestClose={() => setIsModalOpen(false)} 
        onAddRecord={handleAddRecord} 
      />
    </Container>
  );
};

export default InventoryManagement;