import React, { useContext } from 'react';
import styled from 'styled-components';
import Square from '../Square';
import AppContext from '../../context/AppContext';

const Index = () => {
    const { squares } = useContext(AppContext);
    return (
        <Board>
            {
                squares.map((square, index) => {
                    return <Square index={index} value={square} key={`square_${index}`} />
                })
            }
        </Board>
    )
};

const Board = styled.main`
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
    max-width: 330px;
    max-height: 330px;
`;

export default Index;