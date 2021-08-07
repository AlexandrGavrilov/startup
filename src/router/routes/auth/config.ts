import { SignIn } from 'modules/auth/signIn';
import { SignUp } from 'modules/auth/signUp';

import { Auth } from 'views/Auth';

import { IRoute } from '../../types';

import { AuthView, AuthModules } from './constants';

export const routes: IRoute = {
  path: `/:view(${AuthView})`,
  component: Auth,
  defaultModule: {
    path: '/',
    component: SignIn,
  },
  modules: [
    {
      path: `/:module(${AuthModules.SIGHT_IN})`,
      exactLink: true,
      component: SignIn,
    },
    {
      path: `/:module(${AuthModules.SIGHT_UP})`,
      component: SignUp,
    },
  ],
};
