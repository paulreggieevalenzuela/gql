import * as React from 'react';

import * as S from './Tabs.style';

/**
 * Tabs Component
 *
 * @prop {Array} data items to render in the Tabs
 */

const items = [
  {
    label: 'Reviews & Ratings',
  },
  {
    label: 'NPS',
  },
  {
    label: 'Leaderboards',
  },
];
const Tabs = ({ data = items }) => {
  const [active, setActive] = React.useState(0);

  return (
    <S.Tabs aria-label="tabs-component" tabIndex={0}>
        {data.map((item, itemIdx) =>
          <S.TabItem 
            key={itemIdx}
            onClick={() => setActive(itemIdx)}
            isActive={active === itemIdx}
          >
            {item.label}
          </S.TabItem>
        )}
    </S.Tabs>
  );
}

export default Tabs;