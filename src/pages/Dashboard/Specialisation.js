import React from 'react';

import Card from '../../components/card';
import ProgressBar from '../../components/progress-bar';

// Styles
import * as S from './Dashboard.style';

const Specialisation = () => {

    return (
        <Card withPadding={false}>
            <S.CardHeader>
                <S.CardTitle>
                    Specialisation Ratings
                </S.CardTitle>
                <p className="dropdown">Overall Ratings</p>
            </S.CardHeader>
            <div style={{ 
                display: 'flex',
                alignItems: 'center',
                padding: '0 20px 20px',
            }}>
                <p style={{ margin: '0 10px 0 0' }}>Digital</p>
                <ProgressBar />    
            </div> 
        </Card>
    );
}

export default Specialisation;