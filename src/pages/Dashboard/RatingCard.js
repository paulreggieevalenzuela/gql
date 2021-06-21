import React from 'react';

import Card from '../../components/card';
import Bar from '../../components/bar';

import FiveStars from '../../assets/images/stars.svg';

// Styles
import * as S from './Dashboard.style';

const RatingCard = ({ title, dropdownTitle }) => {

    return (
        <Card margin="0 0 20px" withPadding={false}>
            <S.CardHeader padding="20px 20px 10px">
                <S.CardTitle>{title}</S.CardTitle>
                <p className="dropdown">{dropdownTitle}</p>
            </S.CardHeader>
            <div style={{
                padding: '0 20px 20px'
            }}>
                <S.Rating margin="0">
                    <img src={FiveStars} alt="Five stars" />
                    <p>(4.9 rating based on 20 reviews)</p>
                </S.Rating>
                <Bar />
            </div>
        </Card>
    );
}

export default RatingCard;