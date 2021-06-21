import * as React from 'react';

import * as S from './ProgressBar.style';
/**
 * Progress Bar Component
 *
 * @prop {React.Node}     children      react child that will be rendered inside the wrapper
 */
const ProgressBar = () => {
  return (
    <S.ProgressBar aria-label="progress-bar-component">
        <S.Bar width="80%">
            <span>4.9 stars (20)</span>
        </S.Bar>
    </S.ProgressBar>
  );
}

export default ProgressBar;