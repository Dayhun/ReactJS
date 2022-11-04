import styled from 'styled-components';

export const JoinContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 70px auto;
`;

export const JoinBox = styled.section`
    width: 550px;
    border-radius: 10px;
    margin: 70px 0;
    .loginForm {
        position: relative;
        border: 1px solid #c4c4c4;
        border-radius: 10px;
        padding: 34px;
        z-index: 20;
        margin-top: 62px;
        background-color: white;
    }
`;

export const InputBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const JoinButtonContainer = styled.div`
    display: flex;
    position: absolute;
`;

export const BuyerJoinBtn = styled.button`
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    z-index: 10;
    width: 274px;
    height: 80px;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    background-color: white;
    padding-bottom: 15px;
    /* border-bottom: none; */
`;

export const SellerJoinBtn = styled.button`
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    z-index: 10;
    width: 274px;
    height: 80px;
    background-color: #f2f2f2;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    padding-bottom: 15px;
`;

export const JoinMain = styled.div`
    width: 550px;
    height: 716px;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
`;
