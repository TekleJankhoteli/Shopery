import React, { useState } from 'react';
import { Routes, Route, Form } from "react-router-dom";
import styled from 'styled-components';
import './App.css';
import Header from './components/header/Header';
import MainPage from './components/mainPage/MainPage';
import ProductPage from './ProductPage/ProductPage';

const MainContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:white;
    width: 100%;
    height: 100vh;
`;

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  return (
    <div className="App">

     <MainContainer>
              <Header selectedCategory={selectedCategory} />
              <MainPage selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
              <Routes>
              

        <Route path="/product/:id" element={<ProductPage />} /> {/* Add Route for ProductDetailPage */}
      </Routes>
        
     </MainContainer>
    </div>
  );
}

export default App;
