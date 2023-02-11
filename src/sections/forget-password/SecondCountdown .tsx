import { FormattedMessage } from 'react-intl';

import { LoadingButton } from '@mui/lab';
import { Box, Typography } from '@mui/material';

import { Icon } from 'src/components/Icon';
import useSecondCountdown from 'src/hooks/useSecondCountdown';
import GeneralMessagess from 'src/language/general.messages';

import ForgetPasswordMessages from './ForgetPassword.messages';

interface IPropsState {
  active?: string;
  isSubmitting: boolean;
}

const SecondCountdown = (props: IPropsState) => {
  const { active, isSubmitting } = props;
  const {
    restart,
    isFinished,
    countdown: { minutes, seconds },
  } = useSecondCountdown({ init: 120 });

  const handleResend = async () => {
    restart();
  };

  return (
    <>
      <Box sx={{ textAlign: 'center', mt: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name="timer" color="text.secondary" />
        <Typography variant="h5" color="text.secondary" sx={{ ml: 1 }}>
          {minutes} : {seconds}
        </Typography>
      </Box>

      <Box>
        {isFinished ? (
          <LoadingButton
            fullWidth
            size="large"
            type="button"
            variant="contained"
            sx={{ mt: 3 }}
            color="primary"
            onClick={handleResend}
          >
            <FormattedMessage {...ForgetPasswordMessages.resend} />
          </LoadingButton>
        ) : (
          <LoadingButton
            fullWidth
            disabled={!active}
            size="large"
            type="submit"
            variant="contained"
            sx={{ mt: 3 }}
            color="primary"
            loading={isSubmitting}
          >
            <FormattedMessage {...GeneralMessagess.submit} />
          </LoadingButton>
        )}
      </Box>
    </>
  );
};

export default SecondCountdown;
