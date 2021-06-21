import styled from 'styled-components';

export const Wrapper = styled.section`
    display: ${props => props.display ? props.display : 'block'};
    margin: ${props => props.margin ? props.margin : 0};
    padding: ${props => props.withPadding ? '10px 40px' : 0};
    width: ${props => props.width ? props.width : '100%'};
`;
