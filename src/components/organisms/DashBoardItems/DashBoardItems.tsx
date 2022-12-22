import React from 'react';

import { ItemsBox } from 'components/molecules';
import { RootStyle } from './style';

type Props = {};

const upcomingLeaves = [
  {
    id: 1,
    title: 'Leave 1',
    type: 'leave',
    fromDate: '25th Dec 2022',
    toDate: '25th Dec 2022',
  },
  {
    id: 2,
    title: 'Leave 2',
    type: 'leave',
    fromDate: '25th Dec 2022',
    toDate: '25th Dec 2022',
  },
];

const upcomingHolidays = [
  {
    id: 1,
    title: 'Leave 1',
    type: 'holiday',
    fromDate: '25th Dec 2022',
  },
  {
    id: 2,
    title: 'Leave 2',
    type: 'holiday',
    fromDate: '25th Dec 2022',
  },
];

const DashBoardItems = (props: Props) => {
  return (
    <RootStyle>
      <ItemsBox noOfItems={4} items={upcomingLeaves} mainTitle="Upcoming Leaves" />
      <ItemsBox noOfItems={3} items={upcomingHolidays} mainTitle="Upcoming Holidays" />
    </RootStyle>
  );
};

export default DashBoardItems;
