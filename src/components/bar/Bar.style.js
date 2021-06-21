import styled, { css } from 'styled-components';

export const Bar = styled.div`
    display: flex;
    flex-direction: column;
`;

export const BarContainer = styled.ul`
    border-bottom: 1px solid #9E9EA0;
    height: 100px;
    display: flex;
    align-items: center;
`;

export const BarItems = styled.li`
    color: #000;
    margin-right: 20px;
    position: relative;
    height: 100%;
    width: 100%;

    p {
        font-size: 13px;
        font-weight: 400;
        line-height: 16px;
        text-align: center;
        position: absolute;
        bottom: 10px;
        transform: translate(50%);
        z-index: 1;
    }

    &:last-child {
        margin-right: 0;
    }
`;

export const BarProgress = styled.div`
    background: #5EBEDD;
    width: 100%;
    height: ${props => props.height ? props.height : 0};
    position: absolute;
    bottom: 0;
`;

export const BarLabels = styled.ul`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

export const BarLabel = styled.li`
    width: 100%;
    text-align: center;
    margin-right: 20px;
    font-size: 13px;
    font-weight: 400;
    line-height: 17px;

    &:last-child {
        margin-right: 0;
    }

    p {
        color: #747478;
        margin: 0;
    }
`;


