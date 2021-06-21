import React from 'react';

import Card from '../../components/card';

import FiveStars from '../../assets/images/stars.svg';

// Styles
import * as S from './Dashboard.style';

const OverallRating = () => {
    const rating = 4.9;

    return (
        <Card margin="0 0 20px">
            <S.CardTitle>
                Awesome! Your overall rating is <span className="rating-count">{rating}</span>
            </S.CardTitle>
            <S.Rating>
                <img src={FiveStars} alt="Five stars" />
                <p>(4.9 rating based on 20 reviews)</p>
            </S.Rating>
        </Card>
    );
}

export default OverallRating;