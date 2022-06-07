import React from 'react';
import styled from 'styled-components';

const Index = () => {
    return (
        <>
            <Header>
                <Title>
                    <C color='#CD493A'>T</C>ic
                    {' '}
                    <C color='#4392F1'>T</C>ac
                    {' '}
                    <C color='#CD493A'>T</C>oe
                </Title>
            </Header>
        </>
    )
};

const Header = styled.header`
  color: white;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 60px;
  margin: 0;
`;

const C = styled.span`
  color: ${props => props.color ? props.color : ''} ;
`;

export default Index;