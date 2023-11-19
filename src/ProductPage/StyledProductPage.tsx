import { styled } from "styled-components";

const ProductPageContainer=styled.div`
display:flex;
flex-direction:column;
width:100%;
background-color:red;
`;

const ProductInfoContainer=styled.div`
display:flex;
align-items:center;
justify-content:center;

background-color:pink;
`;


const ProductImage=styled.img`
width:40%;
`;
const ProductInfo=styled.div`
display:flex;
flex-direction:column;

`;

const ProductTitle=styled.h1`
font-size: 36px;
font-weight: 600;
color:#1A1A1A;
`;
const ProductPrice=styled.h2`
font-size: 24px;
color:#2C742F;
font-weight: 500;
`;

const ProductDescription=styled.p`
font-size: 14px;
color:#808080;
font-weight: 400;
`;

const ProductAddToCart=styled.button`
width: 447px;
padding: 16px 40px;
justify-content: center;
align-items: center;
background-color:#00B207;
color:#FFFFFF;
border:none;
border-radius:43px;
`;
const ProductCategory=styled.p`
font-size: 14px;
color:#1A1A1A;
font-weight: 500;
`;
export {ProductPageContainer,
    ProductInfoContainer,
    ProductImage,
    ProductInfo,
    ProductTitle,
    ProductPrice,
    ProductDescription,
    ProductAddToCart,
    ProductCategory

}