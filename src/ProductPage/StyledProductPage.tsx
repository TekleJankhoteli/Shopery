import { styled } from "styled-components";

const ProductPageContainer=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100%;

`;

const ProductInfoContainer=styled.div`
display:flex;
align-items:center;
justify-content:center;
width:80%;
gap:30px;

`;


const ProductImage=styled.img`
width:50%;
`;
const ProductInfo=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;


`;

const ProductTitle=styled.h1`
font-size: 36px;
font-weight: 600;
color:#1A1A1A;
padding-left:30px;
padding-right:30px;
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
padding-left:30px;
padding-right:30px;

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
margin-top:20px;
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