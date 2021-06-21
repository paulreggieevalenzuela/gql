import * as React from 'react';

import * as S from './Cta.style';

/**
 * Cta Component
 *
 * This can be used in more ways like the state of the CTA/Buttons
 * Implement primary, secondary, default, and disabled
 * 
 * 
 * @prop {React.Node}     children      react child that will be rendered inside the cta wrapper
 */
const Cta = ({
  children,
  ...rest
}) => {
  return (
    <S.Cta 
      aria-label="cta-component"
      {...rest}
    >
        {children}
    </S.Cta>
  );
}

export default Cta;