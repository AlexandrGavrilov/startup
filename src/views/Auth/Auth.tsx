import React, { Suspense, FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Spin } from 'antd';

import { IRouteComponentProps } from 'router/types';

import { SWrapper } from './style';

export const Auth: FC<IRouteComponentProps> = ({
  modules,
  path: prefix,
  defaultModule,
}) => {
  const { component: DefaultModule, ...restDefaultModule } = defaultModule;
  return (
    <SWrapper>
      <Switch>
        {modules.map(({ path, to, component: Component, ...rest }) => (
          <Route key={`${path}`} path={`${prefix}${path}`} {...rest}>
            <Suspense fallback={<Spin />}>
              <Component {...rest} />
            </Suspense>
          </Route>
        ))}

        {DefaultModule && (
          <Route {...restDefaultModule} path={`${prefix}${defaultModule.path}`}>
            <Suspense fallback={<Spin />}>
              <DefaultModule {...restDefaultModule} />
            </Suspense>
          </Route>
        )}
      </Switch>
    </SWrapper>
  );
};
