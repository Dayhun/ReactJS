import {
    JoinContainer,
    JoinBox,
    BuyerJoinBtn,
    SellerJoinBtn,
    InputBox,
    JoinButtonContainer,
} from './index.style';
import { LogoIcon } from '../../components/Common/Icon';
import {
    TextLabel,
    IdInput,
    EmailInput,
    PassWordInput,
    TextInput,
    NumberInput,
} from '../Common/Input/index.style';
import { MSBtn, LBtn } from '../Common/Btn/index.style';

function JoinMembership() {
    return (
        <JoinContainer>
            <LogoIcon />
            <JoinBox>
                <JoinButtonContainer>
                    <BuyerJoinBtn>구매회원가입</BuyerJoinBtn>
                    <SellerJoinBtn>판매회원가입</SellerJoinBtn>
                </JoinButtonContainer>
                <form className='loginForm'>
                    <TextLabel>아이디</TextLabel>
                    <InputBox>
                        <IdInput />
                        <MSBtn>중복확인</MSBtn>
                    </InputBox>
                    <TextLabel>비밀번호</TextLabel>
                    <PassWordInput />
                    <TextLabel>비밀번호 재확인</TextLabel>
                    <PassWordInput />
                    <TextLabel>이름</TextLabel>
                    <TextInput />
                    <TextLabel>휴대번호</TextLabel>
                    <InputBox>
                        <NumberInput />
                        <NumberInput />
                        <NumberInput />
                    </InputBox>
                    <TextLabel>이메일</TextLabel>
                    <InputBox>
                        <EmailInput />@<EmailInput />
                    </InputBox>
                </form>
            </JoinBox>
            <LBtn>가입하기</LBtn>
        </JoinContainer>
    );
}

export { JoinMembership };
