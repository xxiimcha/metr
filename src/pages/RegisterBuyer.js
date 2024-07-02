// src/pages/RegisterBuyer.js
import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import Header from '../components/Header';
import axios from 'axios';

const Container = styled.div`
  background-color: ${colors.offWhite};
  color: ${colors.darkBlue};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Form = styled.form`
  background-color: ${colors.lightBlue};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  margin-top: 20px;
`;

const Title = styled.h1`
  color: ${colors.blue};
  margin-bottom: 20px;
  text-align: center;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
  color: ${colors.offWhite};
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid ${colors.blue};
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${colors.blue};
  color: ${colors.offWhite};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.darkBlue};
  }
`;

const RegisterBuyer = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/register-buyer', formData);
      alert(response.data.message);
    } catch (error) {
      alert('Error registering buyer');
    }
  };

  return (
    <Container>
      <Header />
      <Form onSubmit={handleSubmit}>
        <Title>Register as Buyer</Title>
        <Label htmlFor="username">Username</Label>
        <Input type="text" id="username" name="username" required onChange={handleChange} />

        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" required onChange={handleChange} />

        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" name="password" required onChange={handleChange} />

        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input type="password" id="confirmPassword" name="confirmPassword" required onChange={handleChange} />

        <Label htmlFor="address">Shipping Address</Label>
        <Input type="text" id="address" name="address" required onChange={handleChange} />

        <Label htmlFor="phone">Phone Number</Label>
        <Input type="tel" id="phone" name="phone" required onChange={handleChange} />

        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
};

export default RegisterBuyer;
