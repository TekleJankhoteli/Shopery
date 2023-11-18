import { useState, useEffect } from "react";
import {
  MainPageContainer,
  FilterAndResults,
  MainFilterimg,
  ResultsFound,
  AllCategoriesAndResult,
  AllCategories,
  ProductMainContainer,
  CategiriesList,
  PriceContainer,
  CategiriesListItem,
  CategiriesListItemP,
  ProductInfo,
  DivForProductimg,
  DivForProductNameAndPrice,
  ProducName,
  ProductPrice,
  AllcategoryP,
} from "./StyledMainPage";
import filterButton from "../../assets/filterButton.png";

interface Product {
  id: number;
  category: string;
  image: any;
  title: string;
  price: number;
}

const MainPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [uniqueCategories, setUniqueCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data: Product[]) => {
        setProducts(data);

        const categories = Array.from(new Set(data.map((product) => product.category)));
        setUniqueCategories(categories);
      });
  }, []);

  const handleCategoryClick = (category: string | null) => {
    setSelectedCategory(category);
  };

  const getCategoryCount = (category: string | null) => {
    return category
      ? products.filter((product) => product.category === category).length
      : products.length;
  };

  return (
    <MainPageContainer>
      <FilterAndResults>
        <MainFilterimg src={filterButton} />
        <ResultsFound>
          {getCategoryCount(selectedCategory)} results found
        </ResultsFound>
      </FilterAndResults>

      <AllCategoriesAndResult>
        <AllCategories>
          <CategiriesList>
            <CategiriesListItem onClick={() => handleCategoryClick(null)}>
              <AllcategoryP>All Categories</AllcategoryP>
            </CategiriesListItem>
            {uniqueCategories.map((category) => (
              <CategiriesListItem
                key={category}
                onClick={() => handleCategoryClick(category)}
              >
                <CategiriesListItemP>
                  {category} ({getCategoryCount(category)})
                </CategiriesListItemP>
              </CategiriesListItem>
            ))}
          </CategiriesList>
          <PriceContainer></PriceContainer>
        </AllCategories>

        <ProductMainContainer>
          {selectedCategory
            ? products
                .filter((product) => product.category === selectedCategory)
                .map((i) => (
                  <ProductInfo key={i.id}>
                    <DivForProductimg src={i.image} />
                    <DivForProductNameAndPrice>
                      <ProducName>{i.title}</ProducName>
                      <ProductPrice>$ {i.price}</ProductPrice>
                    </DivForProductNameAndPrice>
                  </ProductInfo>
                ))
            : products.map((i) => (
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
};

export default MainPage;
