import { Link, useLocation } from 'react-router-dom';
import { Button, ButtonGroup } from '@chakra-ui/button';
import { turnOffIsLoginFailed } from 'redux/auth/slice';
import { useDispatch } from 'react-redux';

const AuthNav = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const handleClick = () => {
    dispatch(turnOffIsLoginFailed());
  };

  return (
    <nav>
      <ButtonGroup gap="2">
        <Button
          onClick={handleClick}
          isActive={pathname === '/login'}
          colorScheme="orange"
        >
          <Link to="/login">Login</Link>
        </Button>
        <Button
          onClick={handleClick}
          isActive={pathname === '/register'}
          colorScheme="orange"
        >
          <Link to="/register">Register</Link>
        </Button>
      </ButtonGroup>
    </nav>
  );
};

export default AuthNav;
