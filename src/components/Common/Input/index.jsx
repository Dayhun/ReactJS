import { TextInputBox, TextLabel, EmailInput } from './index.style'

function TextInput() {
    return (
        <>
            <TextInputBox>
                <TextLabel>아이디</TextLabel>
                <EmailInput />
            </TextInputBox>
        </>
    );
}

export default TextInput;