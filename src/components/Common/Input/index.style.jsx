import styled from 'styled-components';
import CheckOffIcon from '../../../assets/icon-check-off.svg';

export const TextInputBox = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
`;

export const TextLabel = styled.label`
    display: block;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 16px;
    margin-bottom: 10px;
`;

export const TextInput = styled.input.attrs({
    type: 'text',
    id: 'Name',
})`
    width: 480px;
    height: 54px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: left;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    ::placeholder {
        /* color: #21BF48; */
    }
    &:focus {
        border: 1px solid #21bf48;
    }
`;

export const IdInput = styled(TextInput).attrs({
    type: 'text',
    id: 'ID',
})`
    width: 346px;
    margin-right: 12px;
`;

export const EmailInput = styled(TextInput).attrs({
    type: 'email',
    id: 'loginEmail',
})`
    width: 220px;
`;

export const PassWordInput = styled(TextInput).attrs({
    type: 'password',
    id: 'loginPassword',
})`
    width: 100%;
    &::after {
        /* background: url(${CheckOffIcon}) no-repeat; */
    }
`;

export const NumberInput = styled(TextInput).attrs({
    type: 'number',
    id: 'phonenumber',
})`
    width: 152px;
`;
