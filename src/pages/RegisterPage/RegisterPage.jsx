import AuthForm from 'components/AuthForm/AuthForm';
import { Heading, Box } from '@chakra-ui/react';

const RegisterPage = () => {
  return (
    <Box>
      <Heading my={4} align="center">
        Please register
      </Heading>
      <AuthForm />
    </Box>
  );
};

export default RegisterPage;
