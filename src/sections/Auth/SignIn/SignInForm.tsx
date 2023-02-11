import { FC, InputHTMLAttributes, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { LoadingButton } from '@mui/lab';
import { IconButton, InputAdornment, Stack, Typography } from '@mui/material';

import { Icon } from 'src/components/Icon';
import { RHFTextField } from 'src/components/hook-form';

import { ISignIn } from './SignIn';

const SignInForm: FC = () => {
  const { watch } = useFormContext<ISignIn>();
  const [passwordType, setPasswordType] = useState<InputHTMLAttributes<unknown>['type']>('password');
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <Stack spacing={2}>
      <RHFTextField
        rules={{
          pattern: {
            value: new RegExp(
              /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/,
              'i',
            ),
            message: 'Please enter a valid email address.',
          },
        }}
        name="email"
        size="small"
        label="Email address"
        variant="outlined"
      />
      <Stack spacing={1}>
        <RHFTextField
          name="password"
          size="small"
          label="Password"
          variant="outlined"
          type={passwordType}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    passwordType === 'password' ? setPasswordType('text') : setPasswordType('password');
                  }}
                  edge="end"
                >
                  <Icon name="Eye-Hidden" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Stack direction="row" justifyContent="flex-end" alignItems="center">
          <Typography variant="button" color="info.main">
            <Link to="/auth/forget-password">Forget Password?</Link>
          </Typography>
        </Stack>
      </Stack>
      <LoadingButton
        loading={isSubmitting}
        disabled={!watch('email') || !watch('password')}
        type="submit"
        variant="primary"
      >
        Sign in
      </LoadingButton>
    </Stack>
  );
};

export default SignInForm;
