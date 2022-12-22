import config from 'config';

import Side1 from 'assets/images/svg/Home.svg';
import Side2 from 'assets/images/svg/Side2.svg';
import Side3 from 'assets/images/svg/Side3.svg';
import Side4 from 'assets/images/svg/Side4.svg';
import Side5 from 'assets/images/svg/Side5.svg';
import Side6 from 'assets/images/svg/Side6.svg';
import Side7 from 'assets/images/svg/Side7.svg';
import Side8 from 'assets/images/svg/Side8.svg';
import Side9 from 'assets/images/svg/Side9.svg';
import Side10 from 'assets/images/svg/Side10.svg';

const {
  roles: { Admin, SuperAdmin, Employee },
} = config;

const allRole = [SuperAdmin, Admin, Employee];

const sidebarConfig = [
  {
    title: 'Dashboard',
    path: '/',
    icon: Side1,
    roles: allRole,
  },
  {
    title: 'Company',
    path: '/company',
    icon: Side2,
    roles: [SuperAdmin],
  },
  {
    title: 'Employee ',
    path: '/employee',
    icon: Side3,
    roles: allRole,
  },
  {
    title: 'Users',
    path: '/users',
    icon: Side4,
    roles: allRole,
  },
  {
    title: 'Roles',
    path: '/roles',
    icon: Side5,
    roles: allRole,
  },
  {
    title: 'Permissions',
    path: '/permissions',
    icon: Side6,
    roles: allRole,
  },
  {
    title: 'Leave',
    path: '/leave',
    icon: Side7,
    roles: allRole,
  },
  {
    title: 'Attendance',
    path: '/attendance',
    icon: Side8,
    roles: allRole,
  },
  {
    title: 'Payroll',
    path: '/payroll',
    icon: Side9,
    roles: allRole,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: Side10,
    roles: allRole,
  },
];

export default sidebarConfig;
