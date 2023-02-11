import { Stack, styled } from '@mui/material';

import MainProfile from './MainProfile';

const RootStyle = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.neutral,
  flexDirection: 'row',
}));

function Index() {
  return (
    <RootStyle>
      <MainProfile />
    </RootStyle>
  );
}

export default Index;
