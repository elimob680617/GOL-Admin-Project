import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import { Button, Card, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import SuccessForgetPasswordImage from 'src/assets/images/SuccessForgetPassword.png';

import ForgetPasswordMessages from '../forget-password/ForgetPassword.messages';
import ResetPassFormStyleCompenent from '../forget-password/ResetPassFormStyleCompenent';

const ContentStyle = styled(Card)(({ theme }) => ({
  maxWidth: 360,
  margin: 'auto',
  padding: theme.spacing(4),
}));

export default function SuccessResetPassword() {
  return (
    <ResetPassFormStyleCompenent title="Success Reset Password">
      <ContentStyle>
        <img loading="lazy" src={SuccessForgetPasswordImage} alt="success" />
        <Stack alignItems="center" spacing={3}>
          <Typography variant="subtitle2" color="gray.700">
            <FormattedMessage {...ForgetPasswordMessages.resetPasswordSuccessfully} />
          </Typography>
          <Link to={'/auth/sign-in'}>
            <Button size="large" variant="contained" sx={{ mt: 5 }}>
              <FormattedMessage {...ForgetPasswordMessages.logIntoAccount} />
            </Button>
          </Link>
        </Stack>
      </ContentStyle>
    </ResetPassFormStyleCompenent>
  );
}
