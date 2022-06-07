import React, { useContext } from 'react';
import styled, { keyframes, css } from 'styled-components';
import AppContext from '../../context/AppContext';

const Index = ({ value, index }) => {
    const { handleClickSquare, turn, winningSquares } = useContext(AppContext);
    const winner = winningSquares.includes(index);
    const handleClick = () => {
        (turn !== null && value === null) && handleClickSquare(index);
    }

    return (
        <Square type={value} onClick={handleClick} winner={winner} />
    )
};

const pulse = keyframes`
    0% {
		animation-timing-function: ease-out;
		transform: scale(1);
		transform-origin: center center;
	}

	10% {
		animation-timing-function: ease-in;
		transform: scale(0.91);
	}

	17% {
		animation-timing-function: ease-out;
		transform: scale(0.98);
	}

	33% {
		animation-timing-function: ease-in;
		transform: scale(0.87);
	}

	45% {
		animation-timing-function: ease-out;
		transform: scale(1);
	}
`;

const animation = css`animation: ${pulse} 1s infinite;`

const Square = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${props => props.type === 'x' ? '#CD493A' : props.type === 'o' ? '#4392F1' : '#848484'};
    margin: 5px;
    transition: all .2s;
    border-radius: ${props => props.type === 'o' ? '100%' : '0%'};
    clip-path: ${props => props.type === 'x' ?
        'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)' :
        'polygon(36% 0, 0 0, 0 29%, 0 57%, 0 100%, 30% 100%, 73% 100%, 100% 100%, 100% 59%, 100% 31%, 100% 0, 74% 0)'};
    ${props => props.winner ? animation : ''}
`;

export default Index;