import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Avatar, Button, Collapse, Stack, TextField, Typography, styled } from '@mui/material';

import { Icon } from 'src/components/Icon';
import PhoneNumber from 'src/components/PhoneNumber';

const RootStyle = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(3),
  width: 272,
}));
const SettingCategory = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(3),
  width: 500,
  flexDirection: 'row',
  borderRadius: 1,
  gap: theme.spacing(2),
}));
const ContentStyle = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  width: 1040,
  borderRadius: 1,
}));
const InformationStyle = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.neutral,
  flexDirection: 'row',
  alignItems: 'center',
  padding: theme.spacing(1, 3),
  borderRadius: theme.spacing(1, 1, 0, 0),
  justifyContent: 'space-between',
  marginBottom: theme.spacing(1),
}));
function MainProfile() {
  const [openInformation, setOpenInformation] = useState(false);
  const [openSecurity, setOpenSecurity] = useState(false);
  return (
    <RootStyle spacing={3}>
      {/*...............................................Setting Category */}
      <SettingCategory>
        <Avatar sx={{ width: 136, height: 136 }} />
        <Stack spacing={1}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Icon name="account" />
            <Typography variant="subtitle1" color="text.primary">
              MS. Tanin Amoei
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Icon name="Bio" />
            <Typography variant="subtitle2" color="text.primary">
              User ID:
            </Typography>
            <Typography variant="body2" color="grey.700">
              123456
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Icon name="office-bag" />
            <Typography variant="subtitle2" color="text.primary">
              Roll:
            </Typography>
            <Typography variant="body2" color="grey.700">
              Super Admin
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Icon name="message" />
            <Typography variant="subtitle2" color="text.primary">
              Email:
            </Typography>
            <Typography variant="body2" color="grey.700">
              Taninamoei@gmail.com
            </Typography>
          </Stack>
        </Stack>
      </SettingCategory>
      <ContentStyle spacing={3}>
        {/*............................................... Information*/}
        <Stack>
          <InformationStyle>
            <Typography variant="subtitle1" color="text.primary">
              Information
            </Typography>
            <Button
              variant="outlined"
              sx={{ width: 40, height: 40 }}
              onClick={() => setOpenInformation(!openInformation)}
            >
              <Icon name={openInformation ? 'upper-arrow' : 'down-arrow'} />
            </Button>
          </InformationStyle>
          <Collapse in={openInformation}>
            <Stack
              direction="row"
              sx={{
                flexWrap: 'wrap',
                gap: 2,
              }}
            >
              <TextField
                size="small"
                sx={{
                  width: '49%',
                  mt: 1,
                  mb: 1,
                  '& .css-wvz1op-MuiFormLabel-root-MuiInputLabel-root': {
                    color: 'text.primary',
                    fontWeight: 'bold',
                  },
                  '& .css-b92g83-MuiInputBase-input-MuiOutlinedInput-input': {
                    color: 'text.disabled',
                  },
                }}
                label="First Name"
                InputLabelProps={{ shrink: true }}
                value="Tanin"
              />
              <TextField
                size="small"
                sx={{
                  width: '49%',
                  mt: 1,
                  mb: 1,
                  '& .css-wvz1op-MuiFormLabel-root-MuiInputLabel-root': {
                    color: 'text.primary',
                    fontWeight: 'bold',
                  },
                  '& .css-b92g83-MuiInputBase-input-MuiOutlinedInput-input': {
                    color: 'text.disabled',
                  },
                }}
                label="Last Name"
                InputLabelProps={{ shrink: true }}
                value="Amoei"
              />
              <TextField
                size="small"
                sx={{
                  width: '49%',
                  mt: 1,
                  mb: 1,
                  '& .css-wvz1op-MuiFormLabel-root-MuiInputLabel-root': {
                    color: 'text.primary',
                    fontWeight: 'bold',
                  },
                  '& .css-b92g83-MuiInputBase-input-MuiOutlinedInput-input': {
                    color: 'text.disabled',
                  },
                }}
                label="Email"
                InputLabelProps={{ shrink: true }}
                value="Taninamoei@gamil.com"
              />
              <PhoneNumber
                placeHolder="9112468275"
                value="9112468275"
                onChange={function (val: string): void {
                  throw new Error('Function not implemented.');
                }}
              />
              {/* <TextField
                size="small"
                sx={{
                  width: '49%',
                  mt: 1,
                  mb: 1,
                  '& .css-wvz1op-MuiFormLabel-root-MuiInputLabel-root': {
                    color: 'text.primary',
                    fontWeight: 'bold',
                  },
                  '& .css-b92g83-MuiInputBase-input-MuiOutlinedInput-input': {
                    color: 'text.disabled',
                  },
                }}
                label="Phone Number"
                InputLabelProps={{ shrink: true }}
                value="9112468275"
              /> */}
              <TextField
                select
                size="small"
                sx={{
                  width: '49%',
                  mt: 1,
                  mb: 1,
                  '& .css-wvz1op-MuiFormLabel-root-MuiInputLabel-root': {
                    color: 'text.primary',
                    fontWeight: 'bold',
                  },
                  '& .css-b92g83-MuiInputBase-input-MuiOutlinedInput-input': {
                    color: 'text.disabled',
                  },
                }}
                label="Gender"
                InputLabelProps={{ shrink: true }}
                defaultValue="Female"
              />
              <TextField
                size="small"
                sx={{
                  width: '49%',
                  mt: 1,
                  mb: 1,
                  '& .css-wvz1op-MuiFormLabel-root-MuiInputLabel-root': {
                    color: 'text.primary',
                    fontWeight: 'bold',
                  },
                  '& .css-b92g83-MuiInputBase-input-MuiOutlinedInput-input': {
                    color: 'text.disabled',
                  },
                }}
                label="Date of Birth"
                InputLabelProps={{ shrink: true }}
                value="26  Dec  1988"
              />
              <TextField
                select
                size="small"
                sx={{
                  width: '49%',
                  mt: 1,
                  mb: 1,
                  '& .css-wvz1op-MuiFormLabel-root-MuiInputLabel-root': {
                    color: 'text.primary',
                    fontWeight: 'bold',
                  },
                  '& .css-b92g83-MuiInputBase-input-MuiOutlinedInput-input': {
                    color: 'text.disabled',
                  },
                }}
                label="Roll"
                InputLabelProps={{ shrink: true }}
                value="Super admin"
              />
            </Stack>
          </Collapse>
        </Stack>
        {/*............................................... Security*/}
        <Stack>
          <InformationStyle>
            <Typography variant="subtitle1" color="text.primary">
              Security
            </Typography>
            <Stack direction="row" spacing={1}>
              <Link to="verifyRegistration">
                <Button variant="outlined" sx={{ bgcolor: 'background.paper' }}>
                  Change password
                </Button>
              </Link>
              <Button variant="outlined" sx={{ width: 40, height: 40 }} onClick={() => setOpenSecurity(!openSecurity)}>
                <Icon name={openSecurity ? 'upper-arrow' : 'down-arrow'} />
              </Button>
            </Stack>
          </InformationStyle>
          <Collapse in={openSecurity}>
            <TextField
              select
              size="small"
              sx={{
                width: '49%',
                mt: 1,
                mb: 1,
                '& .css-wvz1op-MuiFormLabel-root-MuiInputLabel-root': {
                  color: 'text.primary',
                  fontWeight: 'bold',
                },
                '& .css-b92g83-MuiInputBase-input-MuiOutlinedInput-input': {
                  color: 'text.disabled',
                },
              }}
              label="Login Method"
              InputLabelProps={{ shrink: true }}
              value="Email Address"
            />
          </Collapse>
        </Stack>
      </ContentStyle>
    </RootStyle>
  );
}

export default MainProfile;
