import AuthForm from 'components/AuthForm/AuthForm';
import { Heading, Box } from '@chakra-ui/react';

const LoginPage = () => {
  return (
    <Box>
      <Heading my={4} align="center">
        Please login
      </Heading>
      <AuthForm />
    </Box>
  );
};

export default LoginPage;
