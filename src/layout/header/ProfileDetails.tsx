import { Avatar, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Icon } from 'src/components/Icon';

const RootStyle = styled(Stack)(({ theme }) => ({
  height: 64,
  alignItems: 'center',
  flexDirection: 'row',
  gap: theme.spacing(5),
}));
const DetailsStyle = styled(Stack)(({ theme }) => ({
  height: 64,
  alignItems: 'center',
  flexDirection: 'row',
  gap: theme.spacing(2),
}));
function ProfileDetails() {
  return (
    <RootStyle>
      <Stack direction="row" spacing={4}>
        <Icon name="Unread-Notifications" />
        <Icon name="comment" />
      </Stack>
      <DetailsStyle>
        <Stack direction="row" alignItems="center">
          <Icon name="down-arrow" />
          <Stack>
            <Typography variant="body2">Tanin Amoei</Typography>
            <Typography variant="caption" color="#8798A1">
              Main Admin
            </Typography>
          </Stack>
        </Stack>
        <Avatar />
      </DetailsStyle>
    </RootStyle>
  );
}

export default ProfileDetails;
