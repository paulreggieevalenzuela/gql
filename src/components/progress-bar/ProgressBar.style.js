import styled, { css } from 'styled-components';

export const ProgressBar = styled.div`
    background: #E6E6E8;
    border-radius: 100px;
    width: 100%;
    height: 20px;

    span {
        color: #fff;
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
    }
`;

export const Bar = styled.div`
    background: #5EBEDD;
    border-radius: 100px;
    height: 20px;
    width: ${props => props.width ? props.width : 0};

    ${props => props.width && css`
        padding: 0px 10px;
        text-align: right;
    `}
`;


