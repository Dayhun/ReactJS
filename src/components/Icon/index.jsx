import LogoImg from '../../assets/Logo-hodu.png'
import ShoppingCartImg from '../../assets/icon-shopping-cart-2.svg'
import UserImg from '../../assets/icon-user-2.svg'
import { LogoContainer, ShoppingContainer, UserContainer } from './index.style';

function LogoIcon() {
    return (
        <LogoContainer>
            <img src={LogoImg} className='logoimg' alt='로고이미지' />
        </LogoContainer>
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

export { LogoIcon, ShoppingCartIcon, UserIcon };