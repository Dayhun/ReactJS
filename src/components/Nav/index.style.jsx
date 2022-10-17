import styled from 'styled-components';
// import SearchIcon from '../../assets/icon-search-2.svg'

export const NavContainer = styled.div`
background-color:black;
padding: 20px;
display: flex;
align-items: center;
gap: 20px;
justify-content: space-between;
top: 0;
position: sticky;
`

export const SearchContainer = styled.div`
display: flex;
align-items: center;
background-color:black;
width: 400px;
height: 46px;
border: 2px solid #21BF48;
border-radius: 50px;
text-align: left;
padding: 13px;
`

export const SearchBox = styled.input.attrs({
    type: 'text',
    id: 'search',
    placeholder: '상품을 검색해보세요!',
})
    `
width: 100%;
border: none;
background-color:black;
color: #21BF48;
margin-left: 20px;
`

export const NavImgContainer = styled.div`
display: flex;
gap: 20px;
`