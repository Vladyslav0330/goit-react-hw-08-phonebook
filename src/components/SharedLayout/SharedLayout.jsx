import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../Loader/Loader';
import { StyledHeader } from './SharedLayout.styled';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { useAuth } from 'utilites/hooks/useAuth';
import {
  Flex,
  Box,
  Spacer,
  Container,
  useColorMode,
  IconButton,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const SharedLayout = () => {
  const { isLoggedIn } = useAuth();
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Container maxW="container.xl">
      <StyledHeader>
        <Flex align="center">
          <Box p="4">
            <Navigation />
          </Box>
          <Spacer />
          <IconButton
            aria-label="toggle theme"
            rounded="full"
            size="xs"
            onClick={toggleColorMode}
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          />
          <Box p="4">{isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>
        </Flex>
      </StyledHeader>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default SharedLayout;
