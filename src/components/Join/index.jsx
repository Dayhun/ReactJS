import { JoinContainer, BuyerJoinBtn, SellerJoinBtn, JoinMain } from './index.style';
import { TextLabel, EmailInput, PassWordInput } from '../Common/Input/index.style'

function JoinMembership() {
    return (
        <JoinContainer>
            <BuyerJoinBtn>구매회원가입</BuyerJoinBtn>
            <SellerJoinBtn>판매회원가입</SellerJoinBtn>
            <form className='loginForm'>
                <TextLabel>아이디</TextLabel>
                <EmailInput />
                <TextLabel>비밀번호</TextLabel>
                <PassWordInput />
            </form>
        </JoinContainer>
    )
}

export { JoinMembership };