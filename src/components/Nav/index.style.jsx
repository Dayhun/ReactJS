import styled from 'styled-components';
import SearchIcon from '../../assets/icon-search-2.svg'

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
color: #21BF48;
&::after {
        /* position: absolute; */
        content: '';
        /* right: 0px;
        bottom: 0px; */
        width: 28px;
        height: 28px;
        background: url(${SearchIcon}) no-repeat center / 28px 28px;
        /* border-radius: 50%; */
    }
`

export const NavImgContainer = styled.div`
display: flex;
gap: 20px;
`