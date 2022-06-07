import { useState } from 'react';
import styled from 'styled-components';
import Board from './components/Board';
import AppContext from './context/AppContext';
import ScoreBoard from './components/Scoreboard';
import Header from './components/Header';

const App = () => {
  const [turn, setTurn] = useState('x');
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winningSquares, setWinningSquares] = useState([]);
  const [score, setScore] = useState({ x: 0, o: 0 });

  const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const reset = () => {
    setTurn('x');
    setSquares(Array(9).fill(null));
    setWinningSquares([]);
  };

  const verifyWinner = newSquares => {
    for (let i = 0; i < winningPositions.length; i++) {
      const [a, b, c] = winningPositions[i];
      if (newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c]) {
        endGame(newSquares[a], winningPositions[i]);
        return;
      }
    }
    setTurn(turn === 'x' ? 'o' : 'x')
  };

  const endGame = (result, winningPositions) => {
    setTurn(null);
    if (result !== null) {
      setScore({
        ...score,
        [result]: score[result] + 1,
      })
    }
    setWinningSquares(winningPositions);
    setTimeout(reset, 2000);
  };

  const handleClickSquare = square => {
    let newSquares = [...squares];
    newSquares.splice(square, 1, turn);
    setSquares(newSquares);
    verifyWinner(newSquares);
  }

  return (
    <AppContext.Provider value={{
      turn,
      squares,
      winningSquares,
      score,
      handleClickSquare
    }}>
      <Container>
        <Header />
        <Board />
        <ScoreBoard />
      </Container>
    </AppContext.Provider>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #223338;
`;

export default App;
