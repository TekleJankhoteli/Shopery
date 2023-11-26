// Header.tsx
import React from 'react';
import { HeaderContainer, HeaderNavigation, HeaderHomeIcon, HeaderVectorIcon, HeaderCategoryP, HeaderCurentCategory,HeaderProductName } from "./StyledHeader";
import { Product } from '../mainPage/MainPage';
import homeIcon from '../../assets/homeIcon.png';
import homeNavigationIcon from '../../assets/navigationIcon.png';
import { useNavigate } from 'react-router-dom';


interface HeaderProps {
  selectedCategory?: string | null;
  currentCategory?: string | null; 
  product?: Product | null; 
  onCategoryChange: (category: string | null) => void;

}

  const Header: React.FC<HeaderProps> = ({selectedCategory=null, product, onCategoryChange}) => {
  const displayCategory=selectedCategory===null? "All categories": selectedCategory;
  const displayProductName = product ? product.title : "";
  const navigate = useNavigate();


  const handleCategoryClick = () => {
    onCategoryChange(null);
    navigate('/');
  };

 
  return (
    <HeaderContainer>
      <HeaderNavigation>
        
        <HeaderHomeIcon src={homeIcon} />
        <HeaderVectorIcon src={homeNavigationIcon} />
        <HeaderCategoryP onClick={handleCategoryClick}>Categories</HeaderCategoryP>
        <HeaderVectorIcon src={homeNavigationIcon} />
        <HeaderCurentCategory>{displayCategory}</HeaderCurentCategory>
        <HeaderVectorIcon src={homeNavigationIcon} />
        <HeaderProductName>{displayProductName}</HeaderProductName>
        
      </HeaderNavigation>
    </HeaderContainer>
  );
}

export default Header;
