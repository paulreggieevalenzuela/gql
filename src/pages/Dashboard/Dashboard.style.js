import styled from 'styled-components';

const overviewColorStatus = {
    missing: '#E53700',
    notSent: '#9E9EA0',
    scheduled: '#E6E6E8',
    sent: '#EDAB00',
    complete: '#E6E6E8',
};

// H1 is implemented only once per page of the application
export const Title = styled.h1`
    color: #11283c;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0.5px;
    line-height: 30.12px;
    margin-bottom: 25px;
`;

export const NavigationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    .nav__action {
        display: flex;
        align-items: center;

        p {
            margin-right: 10px;
        }
    }
`;

export const CardTitle = styled.h2`
    color: #11283c;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.5px;
    line-height: 16px;
    margin: 0;

    // Can be separate a separate component
    .badge {
        background-color: #e53700;
        border-radius: 20px;
        color: #fff;
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
        padding: 4px 6px;
    }

    .rating-count {
        font-weight: bold;
    }
`;

export const CardHeader = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${props => props.padding ? props.padding : '20px'};
`;

export const Overview = styled.ul`
    display: flex;
    align-items: center;
    padding: 0 20px 20px 20px;
`;

export const OverviewItem = styled.li`
    border: 1px solid ${props => overviewColorStatus[props.status]};
    margin-right: 15px;
    padding: 15px;
    width: 100px;
    height: 100px;
    filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05));
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    p {
        color: #11283c;
        font-size: 13px;
        font-weight: 500;
        line-height: 16px;
        text-align: center;
        margin: 0;

        &:first-child {
            font-size: 18px;
            font-weight: bold;
            margin: 10px 0;
        }
    }

    &:after {
        content: '•';
        color: ${props => overviewColorStatus[props.status]};
        font-size: 24px;
        position: absolute;
        top: 0;
        right: 10px;
    }
`;

export const Rating = styled.div`
    display: flex;
    align-items: center;
    margin: ${props => props.margin ? props.margin : '10px 0'};

    p {
        color: #747478;
        font-size: 14px;
        font-weight: 500;
        line-height: 16px;
        margin: 0 5px;
    }
`;

export const List = styled.ul``;
export const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e8;
    padding: 20px;

    p {
        margin: 0;
    }

    .name {
        color: #11283C;
        font-size: 16px;
        font-weight: 700;
        line-height: 16px;
        margin-bottom: 5px;
    }

    .position {
        color: #6F7283;
        font-size: 14px;
        font-weight: 500;
        line-height: 14px;
        margin-bottom: 5px;
    }

    .department {
        color: #9E9EA0;
        font-size: 12px;
        font-weight: 400;
        line-height: 13px;
    }

    .outstanding {
        color: #11283C;
        font-size: 14px;
        font-weight: 500;
        line-height: 17.57px;
    }

    .date {
        color: #949494;
        margin-left: 5px;
    }

    .list__content {
        display: flex;
        align-items: center;
    }

    .list__content-rating {

        div {
            margin-top: 0px;
            margin-bottom: 5px;
        }
    }

    .list__content-info {
        margin-right: 30px;
    }
`;