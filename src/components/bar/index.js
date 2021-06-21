import * as React from 'react';

import * as S from './Bar.style';
/**
 * Bar Component
 *
 * @prop {array} data array of items that will be used in the bar
 */
const Bar = () => {
  const data = [
    {
      value: '10%',
      star: 1,
      count: 0,
    },
    {
      value: '63%',
      star: 6,
      count: 9,
    },
    {
      value: '7%',
      star: 1,
      count: 3,
    },
    {
      value: '0%',
      star: 0,
      count: 2,
    },
    {
      value: '20%',
      star: 2,
      count: 0,
    },
  ]
  return (
    <S.Bar aria-label="bar-component">
        <S.BarContainer>
          {data.map((d, idx) => (
            <S.BarItems key={idx} aria-label="bar-item">
              <p>{d.value}</p>
              <S.BarProgress height={d.value} />
            </S.BarItems>
          ))}
        </S.BarContainer>
        <S.BarLabels>
          {data.map((d, idx) => (
            <S.BarLabel key={idx} aria-label="bar-label">
              <p>{d.star} star</p>
              <p>({d.count})</p>
            </S.BarLabel>
          ))}
        </S.BarLabels>
    </S.Bar>
  );
}

export default Bar;