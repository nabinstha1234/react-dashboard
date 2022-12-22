import { styled } from '@mui/material/styles';
import { ListItemIcon, ListItemButton } from '@mui/material';

export const ListItemStyle = styled((props: any) => <ListItemButton disableGutters {...props} />)(
  ({ theme }) => ({
    ...theme.typography.body2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  })
);

export const ListItemIconStyle = styled(ListItemIcon)({
  width: 18,
  height: 18,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
