import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import { renderViewRoutes } from 'router/Router';
import { AuthView } from 'router/routes/auth';

import i18n from 'shared/utils/translation';

import { BASE_URL } from './config/server';

import 'antd/dist/antd.css';
import './index.css';

function App() {
  console.log(BASE_URL);
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Switch>
            {renderViewRoutes()}
            <Route path="*">
              <Redirect to={`/${AuthView}`} />
            </Route>
          </Switch>
        </BrowserRouter>
        <header className="App-header" />
      </I18nextProvider>
    </>
  );
}

export default App;
