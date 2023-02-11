import asyncComponentLoader from 'src/utils/loader';

const signIn = [
  {
    path: 'sign-in',
    element: asyncComponentLoader(() => import(`src/pages/auth/sign-in`)),
  },
];

const forgetPassword = [
  {
    path: 'forget-password',
    element: asyncComponentLoader(() => import(`src/sections/forget-password/ForgetPasswordForm`)),
  },
  {
    path: 'confirmation-forget-password',
    element: asyncComponentLoader(() => import(`src/sections/forget-password/ConfirmationForgetPassword`)),
  },
  {
    path: 'reset-password',
    element: asyncComponentLoader(() => import(`src/sections/reset-password/ResetPasswordForm`)),
  },
  {
    path: 'success-reset-password',
    element: asyncComponentLoader(() => import(`src/sections/reset-password/SuccessResetPassword`)),
  },
];

const exportFiles = [...signIn, ...forgetPassword];
export default exportFiles;
