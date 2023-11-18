import styled from 'styled-components';
import headerImg from '../../assets/headerImg.png';

const HeaderContainer=styled.div`
display: flex;
flex-direction: row;
background-image: url(${headerImg});
// background-repeat:no-repeat;
width:100%;
height:200px;

`;

const HeaderNavigation=styled.div`
display:flex;
flex-direction:row;
gap:15px;
align-items:center;

`;

const HeaderHomeIcon=styled.img`
width:16px;
height:17px;
margin-left:150px;
`;
const HeaderVectorIcon=styled.img`
width:16px;
height:17px;
`;

const HeaderCategoryP=styled.p`
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%;
color:#999999;
`;
const HeaderCurentCategory=styled.p`
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%;
color:#00B207;
`;






export {HeaderContainer,HeaderNavigation,HeaderHomeIcon,HeaderVectorIcon,HeaderCategoryP,HeaderCurentCategory}
