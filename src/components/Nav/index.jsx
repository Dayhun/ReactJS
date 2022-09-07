import { LogoIcon, ShoppingCartIcon, UserIcon } from '../Icon/index'
import { NavContainer, SearchBox, NavImgContainer } from './index.style'

function Nav() {
    return (
        <>
            <NavContainer>
                <LogoIcon />
                <SearchBox />
                <NavImgContainer>
                    <ShoppingCartIcon />
                    <UserIcon />
                </NavImgContainer>
            </NavContainer>
        </>
    )
}

export { Nav };