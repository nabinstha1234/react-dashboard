import { styled } from '@mui/material/styles';

export const RootStyle = styled('div')({
  marginTop: 10,
  background: ' #F3F5F9',
  height: '100%',
  width: '100%',
  padding: 10,
});

export const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingBottom: theme.spacing(10),
}));
