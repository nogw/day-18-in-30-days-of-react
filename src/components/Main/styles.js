import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.1);
  border-radius: 10px;
  max-width: 500px;
`;

export const Text = styled.h1`
  margin: 10px;
  font-family: monospace;
  text-align: center;
`;

export const Button = styled.button`
  background-color: #2C344B;
  cursor: pointer;
  box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.1);
  font-size: 15px;
  font-weight: bold;
  width: 50%;
  color: #fff;
  padding: 10px;
  font-family: monospace;
  border: none;
  border-radius: 5px;
  margin: 10px;
`;
