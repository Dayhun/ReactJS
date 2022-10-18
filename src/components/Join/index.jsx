import { JoinContainer, BuyerJoinBtn, SellerJoinBtn, JoinMain } from './index.style';

function JoinMembership() {
    return (
        <>
            <JoinContainer>
                <BuyerJoinBtn>구매회원가입</BuyerJoinBtn>
                <SellerJoinBtn>판매회원가입</SellerJoinBtn>
                <JoinMain></JoinMain>
            </JoinContainer>
        </>
    )
}

export { JoinMembership };