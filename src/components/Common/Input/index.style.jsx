import styled from 'styled-components';

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
    margin-top: 12px;
`;

export const TextInput = styled.input.attrs({
    type: 'text',
    id: 'Name',
})`
    width: 480px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: left;
    border: 1px solid #C4C4C4;
    border-radius: 5px;
    ::placeholder {
        /* color: #21BF48; */
    }
    &:focus {
        border: 1px solid #21BF48
    }
`;

export const EmailInput = styled(TextInput).attrs({
    type: 'email',
    id: 'loginEmail',
})`
    width: 100%;
`;


export const PassWordInput = styled(TextInput).attrs({
    type: 'password',
    id: 'loginPassword',
})`
    width: 100%;
`;