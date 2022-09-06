import LogoImg from '../../assets/Logo-hodu.png'
import ShoppingCartImg from '../../assets/icon-shopping-cart-2.svg'
import UserImg from '../../assets/icon-user-2.svg'
import { NavContainer, SearchBox, NavImgContainer } from './index.style'

function Nav() {
    return (
        <>
            <NavContainer>
                <img src={LogoImg} className='logoimg' alt='로고이미지' />
                <SearchBox />
                <NavImgContainer>
                    <img src={ShoppingCartImg} className='shoppingcartimg' alt='장바구니이미지' />
                    <img src={UserImg} className='userimg' alt='유저이미지' />
                </NavImgContainer>
            </NavContainer>
        </>
    )
}

export { Nav };