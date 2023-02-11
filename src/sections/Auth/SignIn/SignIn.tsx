import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { IconButton, Stack, Typography, styled } from '@mui/material';

import { Icon } from 'src/components/Icon';
import Logo from 'src/components/Logo';
import { FormProvider } from 'src/components/hook-form';
import useAuth from 'src/hooks/useAuth';

import SignInForm from './SignInForm';

const TextStyle = styled(Typography)(() => ({
  textAlign: 'center',
}));

export interface ISignIn {
  email: string;
  password: string;
}

const SignIn: FC = () => {
  const methods = useForm<ISignIn>({
    defaultValues: { email: '', password: '' },
    mode: 'all',
  });
  const { login } = useAuth();
  return (
    <Stack spacing={3} sx={{ width: 360 }}>
      <Stack direction="row" alignItems="center" justifyContent="center" sx={{ position: 'relative' }}>
        <IconButton sx={{ position: 'absolute', left: 0 }}>
          <Icon name="left-arrow" size={24} />
        </IconButton>
        <Logo sx={{ width: 67, height: 67 }} />
      </Stack>
      <Stack
        sx={{ backgroundColor: 'common.white', py: 3, px: 4, borderRadius: 2 }}
        justifyContent="center"
        spacing={2}
      >
        <TextStyle variant="h4" color="text.primary">
          Sign in
        </TextStyle>
        <TextStyle variant="caption" color="text.secondary">
          Love is the fragrance of god. If you can smell the fragrance, come in to the Garden Of Love
        </TextStyle>
        <FormProvider
          methods={methods}
          children={<SignInForm />}
          onSubmit={methods.handleSubmit((e) => login(e.email, e.password))}
        />
      </Stack>
    </Stack>
  );
};

export default SignIn;
