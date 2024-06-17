import { Navigate, RouteObject } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Reservation from '../pages/Reservation';
import Partners from '../pages/Partners';
import Contacts from '../pages/Contacts';
import MainLayout from '../layouts/MainLayout';
import Error from '../pages/Error';
import Films from '../pages/Films';
import Login from '../pages/Login';
import AuthLayout from '../layouts/AuthLayout';
import News from '../pages/News';
import FilmDescription from '../pages/FilmDescription';

const authLayoutRoutes: RouteObject[] = [
  {
    path: 'login',
    Component: Login,
  },
];

const mainLayoutRoutes: RouteObject[] = [
  {
    index: true,
    element: <Navigate to="./home" relative="path" />,
  },
  {
    path: 'home',
    Component: LandingPage,
  },
  {
    path: 'films',
    Component: Films,
  },
  {
    path: 'films/:id',
    Component: FilmDescription,
  },
  {
    path: 'reservation',
    Component: Reservation,
  },
  {
    path: 'partners',
    Component: Partners,
  },
  {
    path: 'contacts',
    Component: Contacts,
  },
  {
    path: 'news',
    Component: News,
  },
  {
    path: 'auth',
    Component: AuthLayout,
    children: authLayoutRoutes,
  },
];

const routes: RouteObject[] = [
  {
    path: '/',
    Component: MainLayout,
    children: mainLayoutRoutes,
  },
  {
    path: '*',
    Component: Error,
  },
];

export default routes;
