import FuseUtils from '@fuse/utils';
import FuseLoading from '@fuse/core/FuseLoading';
import { Navigate } from 'react-router-dom';
import settingsConfig from 'app/configs/settingsConfig';
import SignInConfig from '../main/sign-in/SignInConfig';
import SignUpConfig from '../main/sign-up/SignUpConfig';
import SignOutConfig from '../main/sign-out/SignOutConfig';
import ForgotPassword from '../main/ForgotPassword/ForgotPassword';
import ExampleConfig from '../main/example/ExampleConfig';

const routeConfigs = [ExampleConfig, SignOutConfig, SignInConfig, SignUpConfig];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
  {
    path: '/',
    element: <Navigate to="/example" />,
    auth: settingsConfig.defaultAuth,
  },
  {
    path: 'loading',
    element: <FuseLoading />,
  },
  {
    path: 'ForgotPassword',
    element: <ForgotPassword />,
  },
  {
    path: '*',
    element: <Navigate to="ForgotPassword" />,
  },
];

export default routes;
