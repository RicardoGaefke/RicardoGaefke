/* eslint-disable padded-blocks */
/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */
import '@babel/polyfill';
import React from 'react';
import { StaticRouter, Switch, Route } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { createServerRenderer } from 'aspnet-prerendering';
import MyHome from './Views/Home/Home';
import MyAbout from './Views/About/About';
import MyNotFound from './Views/NotFound/NotFound';

export default createServerRenderer(params => {
  return new Promise((resolve, reject) => {

    const PageInfo = JSON.parse(params.data.page);
    PageInfo.consentCookie = JSON.parse(params.data.consentCookie);

    // setGlobal({
    //   language: 'PT'
    // });

    const app = (
      <StaticRouter location={params.url} context={params}>
        <Switch>
          <Route path="/" exact component={MyHome} />
          <Route path="/About/" component={MyAbout} />
          <Route path="/NotFound/" exact component={MyNotFound} />
          <Route component={MyNotFound} />
        </Switch>
      </StaticRouter>
    );

    resolve({
      html: renderToString(app),
      globals: {
        MyInitialState: PageInfo,
      },
    }, reject);

  });
});
