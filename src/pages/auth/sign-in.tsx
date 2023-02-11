import { FC } from 'react';

import { Stack, styled } from '@mui/material';

import SignIn from 'src/sections/Auth/SignIn/SignIn';

const WrapperStyle = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  height: '100vh',
}));

const SignInPage: FC = () => {
  return (
    <WrapperStyle alignItems="center" justifyContent="center">
      <SignIn />
    </WrapperStyle>
  );
};

export default SignInPage;
