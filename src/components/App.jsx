import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { lazy } from 'react';
import { fetchCurrentUser } from '../redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useAuth } from 'utilites/hooks/useAuth';
import { useContacts } from 'utilites/hooks/useContacts';
import Loader from 'components/Loader';
import ModalComponent from 'components/Modal';

import HomePage from 'pages/HomePage';
import ContactsPage from 'pages/ContactsPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import NotFoundPage from 'pages/NotFoundPage';
import SharedLayout from './SharedLayout';

// const HomePage = lazy(() => import('../pages/HomePage'));
// const ContactsPage = lazy(() => import('../pages/ContactsPage'));
// const LoginPage = lazy(() => import('../pages/LoginPage'));
// const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
// const RegisterPage = lazy(() => import('../pages/RegisterPage'));
// const SharedLayout = lazy(() => import('./SharedLayout'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const { isModalOpen } = useContacts();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
      {isModalOpen && <ModalComponent />}
    </>
  );
};

export { App };
