import { LogoIcon, SearchIcon, ShoppingCartIcon, UserIcon } from '../Icon/index'
import { NavContainer, SearchContainer, SearchBox, NavImgContainer } from './index.style'

function Nav() {
    return (
        <>
            <NavContainer>
                <LogoIcon />
                <SearchContainer>
                    <SearchBox />
                    <SearchIcon />
                </SearchContainer>
                <NavImgContainer>
                    <ShoppingCartIcon />
                    <UserIcon />
                </NavImgContainer>
            </NavContainer>
        </>
    )
}

export { Nav };