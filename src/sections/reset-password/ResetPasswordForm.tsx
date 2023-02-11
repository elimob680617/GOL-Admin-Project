import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { useLocation, useNavigate } from 'react-router-dom';

import { LoadingButton } from '@mui/lab';
import { Box, Card, IconButton, InputAdornment, Stack, Typography, styled } from '@mui/material';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// import { useResetPasswordMutation } from 'src/_graphql/cognito/mutations/resetPassword.generated';
import { Icon } from 'src/components/Icon';
import PasswordStrength from 'src/components/PasswordStrength';
import { FormProvider, RHFTextField } from 'src/components/hook-form';

// import { useSelector } from 'src/store';
// import { resetUserPasswordSelector } from 'src/store/slices/forgetPassword';
import ForgetPasswordMessages from '../forget-password/ForgetPassword.messages';
import ResetPassFormStyleCompenent from '../forget-password/ResetPassFormStyleCompenent';

type FormValuesProps = {
  password: string;
};

interface propState {
  verificationCode: string;
}

const ContentStyle = styled(Card)(({ theme }) => ({
  maxWidth: 360,
  margin: 'auto',
  padding: theme.spacing(4),
}));

export default function ResetPasswordForm() {
  const navigate = useNavigate();
  const { formatMessage } = useIntl();

  const [showPassword, setShowPassword] = useState(false);
  // const updateUserPassword = useSelector(resetUserPasswordSelector);
  // const [restUserPassword] = useResetPasswordMutation();

  const ResetPasswordSchema = Yup.object().shape({
    password: Yup.string().required('Password is required').min(8).max(50),
  });

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(ResetPasswordSchema),
    defaultValues: { password: '' },
    mode: 'onChange',
  });

  const {
    watch,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const location = useLocation();
  const { verificationCode } = location.state as propState;

  useEffect(() => {
    if (!verificationCode) {
      navigate('/auth/forget-password');
    }
  }, [verificationCode, navigate]);

  const onSubmit = async (data: FormValuesProps) => {
    navigate('/auth/success-reset-password');
    // try {
    //   const result = await restUserPassword({
    //     resetPasswordDto: {
    //       dto: {
    //         password: data.password,
    //         userName: updateUserPassword.username,
    //         confirmationCode: updateUserPassword.verificationCode,
    //       },
    //     },
    //   });
    //   if ((result as any)?.data?.resetPassword?.isSuccess) {
    //     navigate(PATH_AUTH.successResetPassword);
    //   }
    // await new Promise((resolve) => setTimeout(resolve, 500));
    // if (isMountedRef.current) {
    //   // onSent();
    //   // onGetEmail(data.password);
    // }
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <ResetPassFormStyleCompenent title="Reset password">
      <ContentStyle>
        <Stack alignItems="center">
          <Stack spacing={1} alignItems="center" mb={3}>
            <Typography variant="h4" paragraph color="text.primary" sx={{ margin: 0 }}>
              <FormattedMessage {...ForgetPasswordMessages.resetPassword} />
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              <FormattedMessage {...ForgetPasswordMessages.chooseNewPassword} />
            </Typography>
          </Stack>
          <Stack width={'100%'}>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <RHFTextField
                size="small"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                label={formatMessage(ForgetPasswordMessages.resetPassword)}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        {showPassword ? (
                          <Icon name="Eye" color="grey.500" />
                        ) : (
                          <Icon name="Eye-Hidden" color="grey.500" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Stack mb={3} mt={1} spacing={1}>
                {!!watch('password').length ? <PasswordStrength password={watch('password')} /> : <Box height={18} />}

                <Stack direction={'row'} spacing={1} alignItems="center">
                  {watch('password').length >= 8 ? (
                    <Icon name="Approve-Tick" type="solid" color="success.dark" />
                  ) : (
                    <Icon name="Approve-Tick" type="linear" color="grey.300" />
                  )}
                  <Typography color="grey.900" variant="button">
                    <FormattedMessage {...ForgetPasswordMessages.atLeast8Characters} />
                  </Typography>
                </Stack>

                <Stack direction={'row'} spacing={1} alignItems="center">
                  {!!watch('password').match(/[a-z]+/) ? (
                    <Icon name="Approve-Tick" type="solid" color="success.dark" />
                  ) : (
                    <Icon name="Approve-Tick" type="linear" color="grey.300" />
                  )}
                  <Typography color="grey.900" variant="button">
                    <FormattedMessage {...ForgetPasswordMessages.lowercaseLetter} />
                  </Typography>
                </Stack>

                <Stack direction={'row'} spacing={1} alignItems="center">
                  {!!watch('password').match(/[A-Z]+/) ? (
                    <Icon name="Approve-Tick" type="solid" color="success.dark" />
                  ) : (
                    <Icon name="Approve-Tick" type="linear" color="grey.300" />
                  )}
                  <Typography color="grey.900" variant="button">
                    <FormattedMessage {...ForgetPasswordMessages.uppercaseLetter} />
                  </Typography>
                </Stack>

                <Stack direction={'row'} spacing={1} alignItems="center">
                  {!!watch('password').match(/[0-9]+/) ? (
                    <Icon name="Approve-Tick" type="solid" color="success.dark" />
                  ) : (
                    <Icon name="Approve-Tick" type="linear" color="grey.300" />
                  )}
                  <Typography color="grey.900" variant="button">
                    <FormattedMessage {...ForgetPasswordMessages.number} />
                  </Typography>
                </Stack>

                <Stack direction={'row'} spacing={1} alignItems="center">
                  {!!watch('password').match(/[$@#&!]+/) ? (
                    <Icon name="Approve-Tick" type="solid" color="success.dark" />
                  ) : (
                    <Icon name="Approve-Tick" type="linear" color="grey.300" />
                  )}
                  <Typography color="grey.900" variant="button">
                    <FormattedMessage {...ForgetPasswordMessages.specialCharacter} />
                  </Typography>
                </Stack>
              </Stack>
              <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
                disabled={!isValid}
              >
                <FormattedMessage {...ForgetPasswordMessages.continue} />
              </LoadingButton>
            </FormProvider>
          </Stack>
        </Stack>
      </ContentStyle>
    </ResetPassFormStyleCompenent>
  );
}
