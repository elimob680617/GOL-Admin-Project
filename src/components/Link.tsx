/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, PropsWithChildren } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Link: FC<PropsWithChildren<{ path: string }>> = ({ path, children }) => (
  <RouterLink to={path}>
    <a>{children}</a>
  </RouterLink>
);

export default Link;
