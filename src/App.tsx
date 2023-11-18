import React from 'react';
import styled from 'styled-components';
import './App.css';
import Header from './components/header/Header';
import MainPage from './components/mainPage/MainPage';




const MainContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:white;
    width: 100%;
    height: 100vh;
`;


// import { PageOneContainer, ButtonForGameRestart, FinalScore, GameOver } from "./styledComponents/StyledPages";
function App() {
  return (
    <div className="App">
     <MainContainer>
      <Header></Header>
      <MainPage></MainPage>

     </MainContainer>
    </div>
  );
}

export default App;
