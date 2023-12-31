import styled from 'styled-components';


const MainPageContainer=styled.div`
display: flex;
flex-direction: column;
width:80%;
background-color:white;
`;


const FilterAndResults=styled.div`
display:flex;
justify-content:space-between;
margin-top:20px;
margin-bottom:20px;
`;
const FilterButton=styled.button`
width:160px;
height:50px;
border-radius:10px;
border:none;
background-color:#32CD32;
text-align:center;
color:white;
font-size:20px;
letter-spacing:3px;
font-weight:bold;
cursor:pointer;
`;

const ResultsFound=styled.p`
font-size: 16px;
color:#666666
`;

const AllCategoriesAndResult=styled.div`
display:flex;
`;

const AllCategories=styled.div`
display:flex;
flex-direction:column;
width:30%;
`;

const AllcategoryP=styled.div`
font-size: 20px;
color:black;
font-weight: bolder;
align-self:flex-start;
cursor:pointer;
`;

const CategiriesList=styled.div`
display:flex;
flex-direction:column;
`;

const CategiriesListItem=styled.div<{ selected?: boolean }>`
display:flex;
background-color: ${props => (props.selected ? '#eee' : 'transparent')};
width:250px;
`;

const CategiriesListItemP=styled.p<{ selected?: boolean }>`
cursor: pointer;
font-size: 14px;
color: #1A1A1A;
font-weight: ${props => (props.selected ? 'bold' : 'normal')};
padding-left:6px;

&:hover {
  font-weight: bolder;
 
}
`;

const PriceContainer=styled.div`
display:flex;
flex-direction:column;
`;

const ProductMainContainer=styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr;
gap:5px;
`;
const ProductInfo=styled.div`
display:flex;
flex-direction:column;
width:300px;
height:450px;
border: 2px solid #CCCCCC;
border-radius:6px;
cursor:pointer;

&:hover {
  border:3px solid #00B207;
   
  }
`;
const DivForProductimg=styled.img`
width: 260px;
height: 260px;
align-self:center;
`;

const DivForProductNameAndPrice=styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
width:100px;
padding-left:20px;
`;
const ProducName=styled.p`
font-size: 14px;
color:#4D4D4D;
`;

const ProductPrice=styled.p`
font-size: 16px;
color:#1A1A1A;
padding-left:15px;
`;


export {MainPageContainer,
    FilterAndResults,
    FilterButton,
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
    AllcategoryP}
