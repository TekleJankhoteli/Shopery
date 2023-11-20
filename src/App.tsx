import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Header from './components/header/Header';
import MainPage from './components/mainPage/MainPage';
import ProductPage from './ProductPage/ProductPage';
import { Product } from './components/mainPage/MainPage';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="App">
      <Header selectedCategory={selectedCategory} />
      {/* <MainPage
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        setSelectedProduct={setSelectedProduct} 
      /> */}
      <Routes>
        <Route path="/" element={<MainPage selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} setSelectedProduct={setSelectedProduct} />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
