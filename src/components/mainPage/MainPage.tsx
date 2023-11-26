import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MainPageContainer, FilterAndResults, FilterButton, ResultsFound, AllCategoriesAndResult, AllCategories, ProductMainContainer, CategiriesList, CategiriesListItem, CategiriesListItemP, ProductInfo, DivForProductimg, DivForProductNameAndPrice, ProducName, ProductPrice, AllcategoryP } from "./StyledMainPage";
import PriceRangeSlider from './PriceRangeSlider';

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

const MainPage: React.FC<MainPageProps> = ({ selectedCategory, onCategoryChange, setSelectedProduct }) => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [uniqueCategories, setUniqueCategories] = useState<string[]>([]);
  const [filters, setFilters] = useState<{ category: string | null, priceRange: [number, number] }>({ category: null, priceRange: [0, 2000] });
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then((data: Product[]) => {
        setAllProducts(data);

        const categories = Array.from(new Set(data.map(product => product.category)));
        setUniqueCategories(categories);
      });
  }, []);


  useEffect(() => {

    const newFilteredProducts = allProducts.filter(product =>
      (filters.category === null || product.category === filters.category) &&
      (product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1])
    );
    setFilteredProducts(newFilteredProducts);
  }, [filters.category, filters.priceRange, allProducts]);


  const handleCategoryClick = (category: string | null) => {
    onCategoryChange(category === selectedCategory ? null : category);
    setSelectedFilter(category);
  };
  

  const handleProductClick = (product: Product) => {
    if (setSelectedProduct) {
    
      if ((filters.category === null || product.category === filters.category) &&
          (product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1])) {
        setSelectedProduct(product);
      }
    }
  }

  
  const handleFilterButtonClick = () => {

    setFilters(prevFilters => ({
      ...prevFilters,
      category: selectedCategory, 
    }));
   
    console.log('Filter button clicked!');
   
  }

  const handlePriceRangeChange = (newRange: [number, number]) => {
    setFilters({ ...filters, priceRange: newRange });
  };

  return (
    <MainPageContainer>
      <FilterAndResults>
        <FilterButton onClick={handleFilterButtonClick}>Filter</FilterButton>
        <ResultsFound>
          {filters.category
            ? `${filteredProducts.length} results found`
            : `${allProducts.length} results found`}
        </ResultsFound>
      </FilterAndResults>

      <AllCategoriesAndResult>
        <AllCategories>
          <AllcategoryP onClick={() => handleCategoryClick(null)}>All Categories</AllcategoryP>
          <CategiriesList>
            {uniqueCategories.map(category => (
              <CategiriesListItem
                key={category}
                onClick={() => handleCategoryClick(category)}
                selected={category === selectedFilter}>
                <CategiriesListItemP>
                  {category} ({filters.category
                    ? filteredProducts.filter(y => y.category === category).length
                    : allProducts.filter(y => y.category === category).length})
                </CategiriesListItemP>
              </CategiriesListItem>
            ))}
          </CategiriesList>
          <PriceRangeSlider min={0} max={2000} onChange={handlePriceRangeChange} />
        </AllCategories>

        <ProductMainContainer>
          {filters.category
            ? filteredProducts
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
            : allProducts.map(i => (
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
