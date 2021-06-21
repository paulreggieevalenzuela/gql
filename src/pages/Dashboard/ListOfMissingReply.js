import React from 'react';

import Card from '../../components/card';
import Cta from '../../components/cta';

// Assets
import FiveStars from '../../assets/images/stars.svg';

// Styles
import * as S from './Dashboard.style';

const ReviewOverview = () => {
    const items = [
        {
            id: 1,            
            name: 'Chris Almond (Employer)',
            position: 'Head of Digital, Google',
            department: 'Matte Harte',
        },
        {
            id: 2,            
            name: 'Chris Almond (Employer)',
            position: 'Head of Digital, Google',
            department: 'Matte Harte',
        },
        {
            id: 3,            
            name: 'Chris Almond (Employer)',
            position: 'Head of Digital, Google',
            department: 'Matte Harte',
        },
        {
            id: 4,            
            name: 'Chris Almond (Employer)',
            position: 'Head of Digital, Google',
            department: 'Matte Harte',
        },
    ]

    return (
        <Card withPadding={false}>
            <S.CardHeader>
                <S.CardTitle>
                    Reviews - Missing Reply <span className="badge">40</span>
                </S.CardTitle>
            </S.CardHeader>
            <S.List>
                {items.map(item => (
                    <S.ListItem key={item.id}>
                        <div className="list__content">
                            <div className="list__content-info">
                                <p className="name">{item.name}</p>
                                <p className="position">{item.position}</p>
                                <p className="department">{item.department}</p>
                            </div>
                            <div className="list__content-rating">
                                <S.Rating>
                                    <img src={FiveStars} alt="Five stars" />
                                    <p className="date">Feb 2020</p>
                                </S.Rating>
                                <p className="outstanding">Outstanding service.</p>
                            </div>
                        </div>
                        <Cta>Reply</Cta>
                    </S.ListItem>
                ))}
            </S.List>
        </Card>
    );
}

export default ReviewOverview;