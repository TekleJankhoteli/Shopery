import { HeaderContainer,HeaderNavigation,HeaderHomeIcon,HeaderVectorIcon,HeaderCategoryP,HeaderCurentCategory} from "./StyledHeader";
import homeIcon from '../../assets/homeIcon.png';
import homeNavigationIcon from '../../assets/navigationIcon.png';



const Header=()=>{
    return(
        <HeaderContainer>
       

         <HeaderNavigation>
        <HeaderHomeIcon src={homeIcon}/>
        <HeaderVectorIcon src={homeNavigationIcon}/>
        <HeaderCategoryP>Categories</HeaderCategoryP>
        <HeaderVectorIcon src={homeNavigationIcon}/>
        <HeaderCurentCategory>groceries</HeaderCurentCategory>

       
         </HeaderNavigation>




        </HeaderContainer>
    )
}

export default Header;