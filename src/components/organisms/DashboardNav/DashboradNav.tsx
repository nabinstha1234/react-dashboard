import { Box, Stack, IconButton } from '@mui/material';

import { ReactIcon } from 'components/molecules';
import { AccountPopover } from 'components/organisms';

import { RootStyle, Search, SearchIconWrapper, StyledInputBase, ToolbarStyle } from './styles';

import BellIcon from 'assets/images/svg/bell.svg';

type Props = {
  onOpenSideBar: (e: any) => void;
};

const DashboradNav = ({ onOpenSideBar }: Props) => {
  return (
    <RootStyle>
      <ToolbarStyle>
        <IconButton
          onClick={onOpenSideBar}
          sx={{ mr: 1, color: 'text.primary', display: { lg: 'none' } }}
        >
          <ReactIcon icon="eva:menu-2-fill" />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          <Search>
            <SearchIconWrapper>
              <ReactIcon icon="material-symbols:search-rounded" />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
          </Search>
          <img src={BellIcon} alt="logo" />
          <AccountPopover />
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
};

export default DashboradNav;
