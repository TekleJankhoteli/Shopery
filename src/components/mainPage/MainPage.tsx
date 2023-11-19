
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MainPageContainer, FilterAndResults, MainFilterimg, ResultsFound, AllCategoriesAndResult, AllCategories, ProductMainContainer, CategiriesList, PriceContainer, CategiriesListItem, CategiriesListItemP, ProductInfo, DivForProductimg, DivForProductNameAndPrice, ProducName, ProductPrice, AllcategoryP } from "./StyledMainPage";
import filterButton from '../../assets/filterButton.png';
import Price from './Price';
import ProductPage from '../../ProductPage/ProductPage';


interface Product {
  id: number;
  category: string;
  image: any;
  title: string;
  price: number;
}

interface MainPageProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

const MainPage: React.FC<MainPageProps> = ({selectedCategory,onCategoryChange}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [uniqueCategories, setUniqueCategories] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then((data: Product[]) => {
        setProducts(data);

        const categories = Array.from(new Set(data.map(product => product.category)));
        setUniqueCategories(categories);
      });

  }, []);

  const handleCategoryClick = (category: string | null) => {
    onCategoryChange(category===selectedCategory? null:category);
  }

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  }

  return (
   
      <MainPageContainer>

        <FilterAndResults>
          <MainFilterimg src={filterButton} />
          <ResultsFound>
            {selectedCategory
              ? `${products.filter(product => product.category === selectedCategory).length} results found`
              : `${products.length} results found`}
          </ResultsFound>
        </FilterAndResults>

        <AllCategoriesAndResult>
          <AllCategories>
            <AllcategoryP onClick={() => handleCategoryClick(null)}>All Categories</AllcategoryP>
            <CategiriesList>
              {uniqueCategories.map(category => (
                <CategiriesListItem
                  key={category}
                  onClick={() => handleCategoryClick(category)}>
                  <CategiriesListItemP>
                    {category} ({selectedCategory
                      ? products.filter(y => y.category === category).length
                      : products.filter(y => y.category === category).length})
                  </CategiriesListItemP>
                </CategiriesListItem>
              ))}
            </CategiriesList>

          <Price></Price>

          </AllCategories>

          <ProductMainContainer>
            {selectedCategory
              ? products
                .filter(product => product.category === selectedCategory)
                .map(i => (
                  
                  
                  <ProductInfo key={i.id}>
                    <DivForProductimg src={i.image} />
                    <DivForProductNameAndPrice>
                      <ProducName>{i.title}</ProducName>
                      <ProductPrice>$ {i.price}</ProductPrice>
                    </DivForProductNameAndPrice>
                  </ProductInfo>
                ))
              : products.map(i => (
                <ProductInfo key={i.id}>
                  <DivForProductimg src={i.image} />
                  <DivForProductNameAndPrice>
                    <ProducName>{i.title}</ProducName>
                    <ProductPrice>$ {i.price}</ProductPrice>
                  </DivForProductNameAndPrice>
                </ProductInfo>
              ))}
          </ProductMainContainer>
        </AllCategoriesAndResult>




      </MainPageContainer>
   
  );
}

export default MainPage;
