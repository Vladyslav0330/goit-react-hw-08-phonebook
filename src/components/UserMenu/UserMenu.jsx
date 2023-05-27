import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'utilites/hooks/useAuth';
import { logoutUser } from '../../redux/auth/operations';
import { Button } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';

const UserMenu = () => {
  const navigate = useNavigate();
  const { userName } = useAuth();
  const dispatch = useDispatch();

  return (
    <Flex align="center" flexDir={{ base: 'column', sm: 'row' }}>
      <p>Hello, {userName}!</p>
      <Button
        mt={{ base: 1, sm: 'unset' }}
        fontSize="sm"
        size="sm"
        ml={{ base: 1, sm: '4' }}
        colorScheme="orange"
        onClick={() => {
          dispatch(logoutUser());
          navigate('/', { replace: true });
        }}
      >
        Logout
      </Button>
    </Flex>
  );
};

export default UserMenu;
