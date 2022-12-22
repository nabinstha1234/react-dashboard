import React, { useState } from 'react';

import { DashboradNav, DashbordSidebar } from 'components/organisms';

import { RootStyle, MainStyle } from './style';

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <RootStyle>
      <DashboradNav onOpenSideBar={setOpen} />
      <DashbordSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
      <MainStyle>{children}</MainStyle>
    </RootStyle>
  );
};

export default AuthLayout;
