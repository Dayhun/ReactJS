import styled from 'styled-components';

export const NavContainer = styled.div`
background-color:black;
padding: 26px;
display: flex;
gap: 20px;
justify-content: space-between;
top: 0;
position: sticky;
.logoimg{
    width: 124px;
    height: 38px;
    margin-right: 30px;
}
.shoppingcartimg{
    width: 32px;
}
.userimg{
    width: 32px;
}
`

export const SearchBox = styled.input.attrs({
    type: 'text',
    id: 'search',
    placeholder: '상품을 검색해보세요!',
})`
background-color:black;
width: 400px;
height: 46px;
border: 2px solid #21BF48;
border-radius: 50px;
text-align: left;
padding: 13px;
`

export const NavImgContainer = styled.div`
display: flex;
gap: 20px;
/* flex-wrap: wrap; */
`