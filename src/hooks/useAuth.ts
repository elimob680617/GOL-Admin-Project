import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { setUser, userSelector } from 'src/store/slices/auth';

const useAuth = () => {
  const dispatch = useAppDispatch();
  const naviagate = useNavigate();
  const login = async (username: string, password: string) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    const urlencoded = new URLSearchParams();
    urlencoded.append('client_id', 'gol_client');
    urlencoded.append('grant_type', 'password');
    urlencoded.append('client_secret', 'b56eaf7d-0f44-48fe-80cc-367aae6aeff3');
    urlencoded.append('username', username);
    urlencoded.append('password', password);

    urlencoded.append('scope', 'offline_access openid profile');

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
    };

    const data = await fetch('https://devids.aws.gardenoflove.co/connect/token?lang=en-US', requestOptions)
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.log('error', error));

    dispatch(setUser({ name: data.fullname }));
    naviagate('/');
  };

  const { user } = useAppSelector(userSelector);

  return { user, login };
};

export default useAuth;
