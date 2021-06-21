import React from 'react';

// Common Component
import Tabs from '../../components/tabs';
import Wrapper from '../../components/wrapper';
import Cta from '../../components/cta';

// Dashboard Component
import ReviewOverview from './ReviewOverview';
import ListOfMissingReply from './ListOfMissingReply';
import Specialisation from './Specialisation';
import RatingCard from './RatingCard';
import OverallRating from './OverallRating';

// Styles
import * as S from './Dashboard.style';

const Dashboard = () => {

    return (
        <Wrapper>
            <S.Title>Analytics</S.Title>
            <S.NavigationContainer>
                <Tabs />
                <div className="nav__action">
                    <p>Agency</p>
                    <Cta>GET REVIEWS</Cta>
                </div>
            </S.NavigationContainer>
            <Wrapper 
                display="flex"
                withPadding={false}
            >
                <Wrapper 
                    withPadding={false}
                    margin="0 20px 0 0"
                    aria-label="left-content"
                >
                    <ReviewOverview />
                    <ListOfMissingReply />
                </Wrapper>
                <Wrapper 
                    withPadding={false}
                    width="50%"
                    aria-label="right-content"
                >
                    <OverallRating />
                    <RatingCard 
                        title="Employer Ratings" 
                        dropdownTitle="All Categories" 
                    />
                    <RatingCard title="Candidate Ratings" />
                    <Specialisation />
                </Wrapper>
            </Wrapper>
        </Wrapper>
    );
}

export default Dashboard;