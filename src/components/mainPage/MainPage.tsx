
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MainPageContainer, FilterAndResults, MainFilterimg, ResultsFound, AllCategoriesAndResult, AllCategories, ProductMainContainer, CategiriesList, PriceContainer, CategiriesListItem, CategiriesListItemP, ProductInfo, DivForProductimg, DivForProductNameAndPrice, ProducName, ProductPrice, AllcategoryP } from "./StyledMainPage";
import filterButton from '../../assets/filterButton.png';





export interface Product {
  id: number;
  category: string;
  image: string;
  title: string;
  price: number;
  description: string;
}
interface MainPageProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  setSelectedProduct?: (product: Product | null) => void; 
}

const MainPage: React.FC<MainPageProps> = ({ selectedCategory, onCategoryChange, setSelectedProduct }) =>{
  const [products, setProducts] = useState<Product[]>([]);
  const [uniqueCategories, setUniqueCategories] = useState<string[]>([]);
  const navigate = useNavigate();
 

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
    if (setSelectedProduct) {
      setSelectedProduct(product);
    }
  
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

       

          </AllCategories>

          <ProductMainContainer>
        {selectedCategory
          ? products
            .filter(product => product.category === selectedCategory)
            .map(i => (
              <Link to={`/product/${i.id}`} key={i.id}>
                <ProductInfo onClick={() => handleProductClick(i)} key={i.id}>
                  <DivForProductimg src={i.image} />
                  <DivForProductNameAndPrice>
                    <ProducName>{i.title}</ProducName>
                    <ProductPrice>$ {i.price}</ProductPrice>
                  </DivForProductNameAndPrice>
                </ProductInfo>
              </Link>
            ))
          : products.map(i => (
            <Link to={`/product/${i.id}`} key={i.id}>
              <ProductInfo onClick={() => handleProductClick(i)} key={i.id}>
                <DivForProductimg src={i.image} />
                <DivForProductNameAndPrice>
                  <ProducName>{i.title}</ProducName>
                  <ProductPrice>$ {i.price}</ProductPrice>
                </DivForProductNameAndPrice>
              </ProductInfo>
            </Link>
          ))}
      </ProductMainContainer>
        </AllCategoriesAndResult>



      
      </MainPageContainer>
   
  );
}

export default MainPage;
