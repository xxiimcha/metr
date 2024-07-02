import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../styles/colors';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: ${colors.darkBlue};
  color: ${colors.offWhite};
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  position: fixed;
  overflow-y: auto;
  font-size: 0.875rem;
`;

const SidebarItem = styled(Link)`
  display: block;
  padding: 8px 15px;
  color: ${colors.offWhite};
  text-decoration: none;
  margin-bottom: 5px;
  border-radius: 5px;
  font-size: 0.875rem;

  &:hover {
    background-color: ${colors.lightBlue};
  }
`;

const SidebarTitle = styled.h2`
  color: ${colors.beige};
  margin-bottom: 15px;
  font-size: 1.25rem;
`;

const SidebarSectionTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${colors.beige};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SidebarSectionItems = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
`;

const ToggleIcon = styled.span`
  font-size: 0.875rem;
`;

const SellerSidebar = () => {
  const [crmOpen, setCrmOpen] = useState(false);
  const [supplyOpen, setSupplyOpen] = useState(false);
  const [financeOpen, setFinanceOpen] = useState(false);
  const [salesOpen, setSalesOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <SidebarContainer>

      <SidebarSectionTitle onClick={() => setCrmOpen(!crmOpen)}>
        Customer Relationship Management <ToggleIcon>{crmOpen ? '-' : '+'}</ToggleIcon>
      </SidebarSectionTitle>
      <SidebarSectionItems isOpen={crmOpen}>
        <SidebarItem to="/seller-dashboard/crm/customer-database">Customer Database</SidebarItem>
        <SidebarItem to="/seller-dashboard/crm/customer-feedback">Customer Feedback</SidebarItem>
        <SidebarItem to="/seller-dashboard/crm/deeplink">Deeplink</SidebarItem>
      </SidebarSectionItems>

      <SidebarSectionTitle onClick={() => setSupplyOpen(!supplyOpen)}>
        Supply Chain Management <ToggleIcon>{supplyOpen ? '-' : '+'}</ToggleIcon>
      </SidebarSectionTitle>
      <SidebarSectionItems isOpen={supplyOpen}>
        <SidebarItem to="/seller-dashboard/supply/inventory">Inventory Management</SidebarItem>
        <SidebarItem to="/seller-dashboard/supply/order-processing">Order Processing</SidebarItem>
        <SidebarItem to="/seller-dashboard/supply/shipping-management">Shipping Management</SidebarItem>
      </SidebarSectionItems>

      <SidebarSectionTitle onClick={() => setFinanceOpen(!financeOpen)}>
        Finance and Accounting <ToggleIcon>{financeOpen ? '-' : '+'}</ToggleIcon>
      </SidebarSectionTitle>
      <SidebarSectionItems isOpen={financeOpen}>
        <SidebarItem to="/seller-dashboard/finance/payment-method">Payment Method</SidebarItem>
        <SidebarItem to="/seller-dashboard/finance/financial-forecasting">Financial Forecasting</SidebarItem>
        <SidebarItem to="/seller-dashboard/finance/commission-reports">Commission and Subscription Reports</SidebarItem>
      </SidebarSectionItems>

      <SidebarSectionTitle onClick={() => setSalesOpen(!salesOpen)}>
        Sales and Order Management <ToggleIcon>{salesOpen ? '-' : '+'}</ToggleIcon>
      </SidebarSectionTitle>
      <SidebarSectionItems isOpen={salesOpen}>
        <SidebarItem to="/seller-dashboard/sales/order-entry">Order Entry</SidebarItem>
        <SidebarItem to="/seller-dashboard/sales/order-tracking">Order Tracking</SidebarItem>
        <SidebarItem to="/seller-dashboard/sales/order-history">Order History</SidebarItem>
        <SidebarItem to="/seller-dashboard/sales/sales-channels">Sales Channels</SidebarItem>
      </SidebarSectionItems>

      <SidebarSectionTitle onClick={() => setServiceOpen(!serviceOpen)}>
        Service Management <ToggleIcon>{serviceOpen ? '-' : '+'}</ToggleIcon>
      </SidebarSectionTitle>
      <SidebarSectionItems isOpen={serviceOpen}>
        <SidebarItem to="/seller-dashboard/service/service-requests">Service Requests</SidebarItem>
        <SidebarItem to="/seller-dashboard/service/customer-satisfaction">Customer Satisfaction</SidebarItem>
      </SidebarSectionItems>
    </SidebarContainer>
  );
};

export default SellerSidebar;
