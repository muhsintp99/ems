import { useRoutes } from 'react-router-dom';
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

const Router = () => {
  return useRoutes([MainRoutes, AuthenticationRoutes]); 
};

export default Router;
