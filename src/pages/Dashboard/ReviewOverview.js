import React from 'react';

import Card from '../../components/card';

// Styles
import * as S from './Dashboard.style';

const ReviewOverview = () => {
    const items = [
        {
            label: 'Missing Verification',
            value: 2,
            status: 'missing',
        },
        {
            label: 'Invite not sent',
            value: 2,
            status: 'notSent',
        },
        {
            label: 'Invite Scheduled',
            value: 3,
            status: 'scheduled',
        },
        {
            label: 'Invite Sent',
            value: 6,
            status: 'sent',
        },
        {
            label: 'Mssing Reply',
            value: 2,
            status: 'missing',
        },
        {
            label: 'Complete',
            value: 100,
            status: 'complete',
        },
    ]

    return (
        <Card margin="0 0 20px" withPadding={false}>
            <S.CardHeader>
                <S.CardTitle>
                    Reviews Overview
                </S.CardTitle>
            </S.CardHeader>
            <S.Overview>
                {items.map((item, itemIdx) => (
                    <S.OverviewItem key={itemIdx} status={item.status}>
                        <p>{item.value}</p>
                        <p>{item.label}</p>
                    </S.OverviewItem>
                ))}
            </S.Overview>
        </Card>
    );
}

export default ReviewOverview;