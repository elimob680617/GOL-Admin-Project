import asyncComponentLoader from 'src/utils/loader';

const profile = [
  {
    path: 'profile',
    element: asyncComponentLoader(() => import(`src/sections/profile/index`)),
  },
  {
    path: 'profile/verifyRegistration',
    element: asyncComponentLoader(() => import(`src/sections/profile/VerifyRegistration`)),
  },
  {
    path: 'profile/setPassword',
    element: asyncComponentLoader(() => import(`src/sections/profile/SetPasswordForm`)),
  },
  {
    path: 'profile/successfully',
    element: asyncComponentLoader(() => import(`src/sections/profile/SuccessSetPassword`)),
  },
];

const exportFiles = [...profile];
export default exportFiles;
