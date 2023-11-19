// Header.tsx
import React from 'react';
import { HeaderContainer, HeaderNavigation, HeaderHomeIcon, HeaderVectorIcon, HeaderCategoryP, HeaderCurentCategory } from "./StyledHeader";
import homeIcon from '../../assets/homeIcon.png';
import homeNavigationIcon from '../../assets/navigationIcon.png';

interface HeaderProps {
  selectedCategory?: string | null;
}

const Header: React.FC<HeaderProps> = ({selectedCategory=null}) => {
  const displayCategory=selectedCategory===null? "All categories": selectedCategory
  return (
    <HeaderContainer>
      <HeaderNavigation>
        <HeaderHomeIcon src={homeIcon} />
        <HeaderVectorIcon src={homeNavigationIcon} />
        <HeaderCategoryP>Categories</HeaderCategoryP>
        <HeaderVectorIcon src={homeNavigationIcon} />
        <HeaderCurentCategory>{displayCategory}</HeaderCurentCategory>
      </HeaderNavigation>
    </HeaderContainer>
  );
}

export default Header;
