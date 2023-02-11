import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import { LoadingButton } from '@mui/lab';
import { Box, Card, Stack, Typography, styled } from '@mui/material';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, RHFTextField } from 'src/components/hook-form';

// import { useDispatch, useSelector } from 'src/store';
// import { forgetPasswordUpdated, forgetPasswordUsernameSelector } from 'src/store/slices/forgetPassword';
import ForgetPasswordMessages from './ForgetPassword.messages';
import ResetPassFormStyleCompenent from './ResetPassFormStyleCompenent';

const ContentStyle = styled(Card)(({ theme }) => ({
  maxWidth: 360,
  margin: 'auto',
  padding: theme.spacing(4),
}));

type ForgetPasswordFormProps = {
  username: string;
};

export default function ForgetPasswordForm() {
  const navigate = useNavigate();
  const { formatMessage } = useIntl();
  // const dispatch = useDispatch();
  // const forgetPasswordUser = useSelector(forgetPasswordUsernameSelector);
  const ForgetPasswordSchema = Yup.object().shape({
    username: Yup.string().test(
      'validateUsername',
      formatMessage(ForgetPasswordMessages.validEmailMessage),
      function (value) {
        let emailRegex;
        // eslint-disable-next-line no-useless-escape
        emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        const isValidEmail = emailRegex.test(value as string);
        if (!isValidEmail) {
          return false;
        }
        return true;
      },
    ),
  });

  const defaultValues: ForgetPasswordFormProps = {
    username: '',
  };

  const methods = useForm<ForgetPasswordFormProps>({
    resolver: yupResolver(ForgetPasswordSchema),
    defaultValues,
    mode: 'onChange',
  });

  const {
    getValues,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const onSubmit = async (data: ForgetPasswordFormProps) => {
    // dispatch(forgetPasswordUpdated({ ...forgetPasswordUser, username: data.username }));
    navigate('/auth/confirmation-forget-password', { state: { username: data.username } });
  };

  return (
    <ResetPassFormStyleCompenent title="Forget Password">
      <ContentStyle>
        <Stack alignItems="center" spacing={2}>
          <Typography variant="h4" color="text.primary">
            <FormattedMessage {...ForgetPasswordMessages.forgetPassword} />
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" sx={{ textAlign: 'center' }}>
            <FormattedMessage {...ForgetPasswordMessages.recoverYourPassword} />
          </Typography>
        </Stack>
        <Box mt={3} />
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack my={3} spacing={3}>
            <RHFTextField
              label={formatMessage(ForgetPasswordMessages.EmailPlaceholder)}
              variant="outlined"
              size="small"
              autoComplete="username"
              name="username"
            />
          </Stack>
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
            disabled={!isValid || !getValues()?.username?.length}
          >
            <FormattedMessage {...ForgetPasswordMessages.continue} />
          </LoadingButton>
        </FormProvider>
      </ContentStyle>
    </ResetPassFormStyleCompenent>
  );
}
