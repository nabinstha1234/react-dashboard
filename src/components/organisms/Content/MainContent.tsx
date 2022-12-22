import React from 'react';

import { DashBoardItems } from 'components/organisms';

import { RootStyle } from './style';

type Props = {};

const MainContent = (props: Props) => {
  return (
    <RootStyle>
      <DashBoardItems />
    </RootStyle>
  );
};

export default MainContent;
