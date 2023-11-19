import Header from "../components/header/Header";
import { ProductPageContainer,
    ProductInfoContainer,
    ProductImage,
    ProductInfo,
    ProductTitle,
    ProductPrice,
    ProductDescription,
    ProductAddToCart,
    ProductCategory} from "./StyledProductPage";


const ProductPage=()=>{
    return(
        <ProductPageContainer>
        <Header/>

        <ProductInfoContainer>

        <ProductImage/>

        <ProductInfo>
            <ProductTitle>carrot</ProductTitle>
            <ProductPrice>$15</ProductPrice>
            <ProductDescription>akuwgfhoaiejglak</ProductDescription>
            <ProductAddToCart>add</ProductAddToCart>
            <ProductCategory>fka;fam</ProductCategory>
        </ProductInfo>

        </ProductInfoContainer>
        

      </ProductPageContainer>
    )
}
export default ProductPage;