import { JoinContainer, BuyerJoinBtn, SellerJoinBtn } from './index.style';
import {
    TextLabel,
    IdInput,
    EmailInput,
    PassWordInput,
    TextInput,
    NumberInput,
} from '../Common/Input/index.style';
import { MSBtn } from '../Common/Btn/index.style';

function JoinMembership() {
    return (
        <JoinContainer>
            <BuyerJoinBtn>구매회원가입</BuyerJoinBtn>
            <SellerJoinBtn>판매회원가입</SellerJoinBtn>
            <form className='loginForm'>
                <TextLabel>아이디</TextLabel>
                <IdInput />
                <MSBtn>중복확인</MSBtn>
                <TextLabel>비밀번호</TextLabel>
                <PassWordInput />
                <TextLabel>비밀번호 재확인</TextLabel>
                <PassWordInput />
                <TextLabel>이름</TextLabel>
                <TextInput />
                <TextLabel>휴대번호</TextLabel>
                <NumberInput />
                <NumberInput />
                <NumberInput />
                <TextLabel>이메일</TextLabel>
                <EmailInput />@<EmailInput />
            </form>
        </JoinContainer>
    );
}

export { JoinMembership };
