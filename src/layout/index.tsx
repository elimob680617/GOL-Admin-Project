import { Outlet } from 'react-router-dom';

import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

import Menu from 'src/components/Menu';

import Index from './header';

const RootStyle = styled(Stack)(({ theme }) => ({
  padding: 0,
  margin: 0,
}));
const MainStyle = styled('main')(({ theme }) => ({
  flexGrow: 1,
  paddingTop: 0,
}));
const RStyle = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.neutral,
  flexDirection: 'row',
}));

const Layout = () => {
  return (
    <RootStyle>
      <Index />
      <MainStyle>
        <RStyle>
          <Menu />
          <Outlet />
        </RStyle>
      </MainStyle>
    </RootStyle>
  );
};

export default Layout;
