import * as React from 'react';

import * as S from './Sidebar.style';

import LOGO from '../../assets/images/logo.png';
/**
 * Wrapper Component
 *
 * @prop {React.Node}     children      react child that will be rendered inside the wrapper
 */
const Sidebar = () => {
  return (
    <S.Sidebar aria-label="sidebar-component">
        <img src={LOGO} alt="SEO Tags" />
    </S.Sidebar>
  );
}

export default Sidebar;