import { useSelector } from 'react-redux';
import {
  getIsLoggedIn,
  getUserName,
  getUserToken,
  getIsRefreshing,
  getIsLoginFailed,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);
  const userToken = useSelector(getUserToken);
  const userName = useSelector(getUserName);
  const isLoginFailed = useSelector(getIsLoginFailed);

  return {
    isLoggedIn,
    userToken,
    userName,
    isRefreshing,
    isLoginFailed,
  };
};
