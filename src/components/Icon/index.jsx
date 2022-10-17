import LogoImg from '../../assets/Logo-hodu.png'
import SearchImg from '../../assets/icon-search-2.svg'
import ShoppingCartImg from '../../assets/icon-shopping-cart-2.svg'
import UserImg from '../../assets/icon-user-2.svg'
import { LogoContainer, SearchContainer, ShoppingContainer, UserContainer } from './index.style';

function LogoIcon() {
    return (
        <LogoContainer>
            <img src={LogoImg} className='logoimg' alt='로고이미지' />
        </LogoContainer>
    )
}

function SearchIcon() {
    return (
        <SearchContainer>
            <img src={SearchImg} className='searchimg' alt='돋보기이미지' />
        </SearchContainer>
    )
}
function ShoppingCartIcon() {
    return (
        <ShoppingContainer>
            <img src={ShoppingCartImg} className='shoppingcartimg' alt='장바구니이미지' />
            <p>장바구니</p>
        </ShoppingContainer>
    )
}

function UserIcon() {
    return (
        <UserContainer>
            <img src={UserImg} className='userimg' alt='유저이미지' />
            <p>로그인</p>
        </UserContainer>
    )
}

export { LogoIcon, SearchIcon, ShoppingCartIcon, UserIcon };