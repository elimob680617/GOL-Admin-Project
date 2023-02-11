import { Link } from 'react-router-dom';

import { Box, Stack, TextField, Typography, styled } from '@mui/material';

import { Icon } from 'src/components/Icon';

const RootStyle = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(3),
  width: 272,
  height: '100vh',
}));
function Menu() {
  return (
    <RootStyle spacing={4}>
      <TextField
        id="searchBox"
        name="searchBox"
        variant="outlined"
        size="small"
        // {...(getInputProps() as JSX.Element)}
        placeholder="Search..."
        // value={searchText}
        // onChange={(e) => setSearchText(e.target.value)}
        InputProps={{
          startAdornment: (
            <Box sx={{ marginRight: 1 }}>
              <Icon name="Research" type="solid" />
            </Box>
          ),
        }}
      />
      <Link to="/dashboard">
        <Stack spacing={1} direction="row" sx={{ cursor: 'pointer' }}>
          <Icon name="Catrgories" />
          <Typography variant="button" color="grey.700">
            Dashboard
          </Typography>
        </Stack>
      </Link>
      <Link to="/userManagements">
        <Stack spacing={1} direction="row" sx={{ cursor: 'pointer' }}>
          <Icon name="Groups" />
          <Typography variant="button" color="grey.700">
            User managements
          </Typography>
          <Icon name="right-arrow-1" />
        </Stack>
      </Link>
      <Link to="/profile">
        <Stack spacing={1} direction="row" sx={{ cursor: 'pointer' }}>
          <Icon name="Setting" color="primary.dark" />
          <Typography variant="button" color="primary.dark">
            Settings
          </Typography>
        </Stack>
      </Link>
    </RootStyle>
  );
}

export default Menu;
