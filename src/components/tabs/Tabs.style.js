import styled, { css } from 'styled-components';

export const Tabs = styled.ul`
    display: flex;
    align-items: center;
`;

export const TabItem = styled.li`
    color: #11283c;
    cursor: pointer;
    font-size: 15px;
    font-weight: 400;
    font-family: 'Mulish', 'Helvetica', sans-serif;
    letter-spacing: 0.5px;
    line-height: 16px;
    margin-right: 20px;
    padding: 0 0 5px;
    transition: all 0.3s ease-in-out;

    &:last-child {
        margin-right: 0;
    }

    ${props => props.isActive && css`
        border-bottom: 1px solid #11283c;
        font-weight: 700;
    `}
`;
