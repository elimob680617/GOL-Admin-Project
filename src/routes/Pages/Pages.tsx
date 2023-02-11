import { Route, Routes } from 'react-router-dom';

import Box from '@mui/material/Box';

import Layout from 'src/layout';
import { AnyProps } from 'src/utils/loader/types';

import authRoutes from './auth';
import profileRoutes from './profile';

function Pages() {
  const renderRoutes = (
    routes: {
      path: string;
      element: (props: AnyProps) => JSX.Element;
    }[],
  ) =>
    routes?.map((route, idx) => <Route path={route.path} element={<route.element />} key={`${route.path}-${idx}`} />);

  return (
    <Box>
      <Box>
        <Routes>
          <Route path="auth/*">{renderRoutes(authRoutes)}</Route>

          <Route element={<Layout />}>
            <Route path="/">{renderRoutes(profileRoutes)}</Route>
            <Route path="/dashboard" element={<p>dashboard</p>}></Route>
            <Route path="/userManagements">{renderRoutes(profileRoutes)}</Route>
          </Route>
        </Routes>
      </Box>
    </Box>
  );
}

export default Pages;
