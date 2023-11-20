import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


import {
  ProductPageContainer,
  ProductInfoContainer,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  ProductDescription,
  ProductAddToCart,
  ProductCategory
} from "./StyledProductPage";

interface Product {
  id: number;
  category: string;
  image: string;
  title: string;
  price: number;
  description: string;
}

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then((data: Product) => {
        setProduct(data);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <ProductPageContainer>
    
      <ProductInfoContainer>
        <ProductImage src={product.image} alt={product.title} />

        <ProductInfo>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductPrice>Product Price: ${product.price}</ProductPrice>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductAddToCart>Add to Cart</ProductAddToCart>
          <ProductCategory>Product Type: {product.category}</ProductCategory>
        </ProductInfo>
      </ProductInfoContainer>
    </ProductPageContainer>
  );
};

export default ProductPage;
