import React from 'react';

import { MainTopBar, MainContent } from 'components/organisms';

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div>
      <MainTopBar />
      <MainContent />
    </div>
  );
};

export default Dashboard;
