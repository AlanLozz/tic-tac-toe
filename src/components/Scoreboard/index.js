import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../../context/AppContext';

const Index = () => {
  const { score } = useContext(AppContext);

  return (
    <Container>
      <Contador bgColor="#CD493A">{score?.x}</Contador>
      <Contador bgColor="#4392F1">{score?.o}</Contador>
    </Container>
  )
};

const Container = styled.div`
    display: flex;
    width: 330px;
    color: white;
`;

const Contador = styled.div`
  background-color: ${props => props.bgColor || '#f77f00'};
  width: 100%;
  margin: 5px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  font-size: 1.5rem;
`;

export default Index;