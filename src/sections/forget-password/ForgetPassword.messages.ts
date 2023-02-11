import { defineMessages } from 'react-intl';

const scope = 'auth.forgetPassword';

const ForgetPasswordMessages = defineMessages({
  continue: {
    id: `${scope}.continue`,
    defaultMessage: 'Continue',
  },
  resend: {
    id: `${scope}.resend`,
    defaultMessage: 'Resend',
  },
  validEmailMessage: {
    id: `${scope}.validEmailMessage`,
    defaultMessage: 'Please use a valid email address.',
  },
  isItYou: {
    id: `${scope}.isItYou`,
    defaultMessage: 'Is it Really you?',
  },
  validPhoneNoMessage: {
    id: `${scope}.validPhoneNoMessage`,
    defaultMessage: 'Please use a valid phone number address.',
  },
  EmailPlaceholder: {
    id: `${scope}.EmailPlaceholder`,
    defaultMessage: 'Email address',
  },
  PhoneNoPlaceholder: {
    id: `${scope}.PhoneNoPlaceholder`,
    defaultMessage: 'Enter phone number',
  },
  usingPhoneNoMessage: {
    id: `${scope}.usingPhoneNoMessage`,
    defaultMessage: 'Using Phone Number',
  },
  usingEmailMessage: {
    id: `${scope}.usingEmailMessage`,
    defaultMessage: 'Using Email',
  },
  verificationEmailAlertMessage: {
    id: `${scope}.verificationEmailAlertMessage`,
    defaultMessage: 'Enter the 5-digit verification code sent to {partialEmail}',
  },
  resetPasswordLabel: {
    id: `${scope}.resetPasswordLabel`,
    defaultMessage: 'New password',
  },
  successResetPassword: {
    id: `${scope}.successResetPassword`,
    defaultMessage: 'Success Reset Password',
  },
  specialCharacter: {
    id: `${scope}.specialCharacter`,
    defaultMessage: 'Special Character',
  },
  number: {
    id: `${scope}.number`,
    defaultMessage: 'Number',
  },
  uppercaseLetter: {
    id: `${scope}.uppercaseLetter`,
    defaultMessage: 'Uppercase Letter',
  },
  lowercaseLetter: {
    id: `${scope}.lowercaseLetter`,
    defaultMessage: 'Lowercase Letter',
  },
  atLeast8Characters: {
    id: `${scope}.atLeast8Characters`,
    defaultMessage: 'At least 8 characters',
  },
  forgetPassword: {
    id: `${scope}.forgetPassword`,
    defaultMessage: 'Forget Password',
  },
  recoverYourPassword: {
    id: `${scope}.recoverYourPassword`,
    defaultMessage: 'Recover your password by entering your email address.',
  },
  resetPassword: {
    id: `${scope}.resetPassword`,
    defaultMessage: 'Reset password',
  },
  chooseNewPassword: {
    id: `${scope}.chooseNewPassword`,
    defaultMessage: 'Choose new password.',
  },
  resetPasswordSuccessfully: {
    id: `${scope}.resetPasswordSuccessfully`,
    defaultMessage: 'Your Password has been reset successfully',
  },
  logIntoAccount: {
    id: `${scope}. logIntoAccount`,
    defaultMessage: ' Log into your account',
  },
});

export default ForgetPasswordMessages;
