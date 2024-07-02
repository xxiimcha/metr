// src/pages/seller/SellerDashboard.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import SellerSidebar from '../../components/SellerSidebar';
import SellerHeader from '../../components/SellerHeader';
import CustomerDatabase from './CustomerDatabase';
import OrderProcessing from './OrderProcessing';
import InventoryManagement from './InventoryManagement'; // Ensure this import is correct
// Import other components here...

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
`;

const MainContent = styled.div`
  margin-left: 250px; /* width of the sidebar */
  padding: 20px;
  width: calc(100% - 250px);
  box-sizing: border-box;
  overflow-y: auto;
  font-size: 0.875rem;
`;

const SellerDashboard = () => {
  const username = "SellerUsername"; // Replace with actual username from state or props

  return (
    <Container>
      <SellerHeader username={username} />
      <Content>
        <SellerSidebar />
        <MainContent>
          <Routes>
            <Route path="crm/customer-database" element={<CustomerDatabase />} />
            <Route path="supply/order-processing" element={<OrderProcessing />} />
            <Route path="supply/inventory" element={<InventoryManagement />} />
            {/* Add other routes here */}
          </Routes>
        </MainContent>
      </Content>
    </Container>
  );
};

export default SellerDashboard;
