// Contact.jsx
import React from 'react';
import styled from 'styled-components';

export const Section = styled.section`
  background-color: #070A10;
  padding: 80px 20px;
  text-align: center;
  color: #C4C9CC;
  font-family: 'Orbitron', sans-serif;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: #FF5C00;
  font-size: 2rem;
  margin-bottom: 40px;
  letter-spacing: 2px;

   @media screen and (min-width:768px) {
      
            font-size: 2.5rem;
       
   }

    @media screen and (min-width:992px) {
      
            font-size: 3rem;
       
   }

      @media screen and (min-width:1200px) {
      
            font-size: 3.5rem;
       
   }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  padding: 12px 15px;
  border: 1px solid #1E1E2A;
  border-radius: 6px;
  background-color: #0B0F16;
  color: #fff;
  font-size: 0.95rem;
  outline: none;

  &:focus {
    border-color: #FF5C00;
  }
         @media screen and (min-width:768px) {
          font-size: 1.3rem;
       }

       @media screen and (min-width:992px) {
          font-size: 1.4rem;
       }

        @media screen and (min-width:1200px) {
          font-size: 1.6rem;
       }




`;

export const TextArea = styled.textarea`
  padding: 12px 15px;
  border: 1px solid #1E1E2A;
  border-radius: 6px;
  background-color: #0B0F16;
  color: #fff;
  font-size: 0.95rem;
  resize: vertical;
  min-height: 120px;
  outline: none;
  resize: none;

  &:focus {
    border-color: #FF5C00;
  }

         @media screen and (min-width:768px) {
          font-size: 1.3rem;
       }
`;

export const Button = styled.button`
  background-color: #FF5C00;
  color: #0B0F16;
  border: none;
  padding: 14px 20px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #ff7a26;
  }

  
       @media screen and (min-width:768px) {
          font-size: 1.3rem;
       }

         @media screen and (min-width:992px) {
          font-size: 1.4rem;
       }

        @media screen and (min-width:1200px) {
          font-size: 1.6rem;
       }

   
       

  
`;
