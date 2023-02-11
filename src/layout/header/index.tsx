import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

import Logo from 'src/components/Logo';

import ProfileDetails from './ProfileDetails';

const RootStyle = styled(Stack)(({ theme }) => ({
  margin: 0,
  height: 64,
  padding: theme.spacing(0, 2),
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
}));
function Index() {
  return (
    <RootStyle>
      <Logo />
      <ProfileDetails />
    </RootStyle>
  );
}

export default Index;
