import { ProductContainer, ProductImg, StoreName, ProductName, ProductPrice } from './index.style'

function Product() {
    return (
        <>
            <ProductContainer>
                <ProductImg alt='상품이미지' />
                <StoreName>{ }</StoreName>
                <ProductName>{ }</ProductName>
                <ProductPrice>{ }</ProductPrice>
            </ProductContainer>
        </>
    )
}

export { Product };