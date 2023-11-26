import React, { useState } from 'react';
import { Routes, Route,useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import MainPage from './components/mainPage/MainPage';
import ProductPage from './ProductPage/ProductPage';
import { Product } from './components/mainPage/MainPage';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const navigate=useNavigate();

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setSelectedProduct(null);
   navigate("/")
  };



  return (
    <div className="App">
      <Header selectedCategory={selectedCategory} product={selectedProduct}onCategoryChange={handleCategoryChange} />
    
      <Routes>
        <Route path="/" element={<MainPage selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} setSelectedProduct={setSelectedProduct} />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
