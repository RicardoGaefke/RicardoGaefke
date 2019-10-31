/* eslint-disable padded-blocks */
/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */
import '@babel/polyfill';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { createServerRenderer } from 'aspnet-prerendering';
import { ServerStyleSheets } from '@material-ui/styles';
import MyStateProvider from './Utils/AppContext';
import MyApp from './Utils/MyApp';

export default createServerRenderer(params => {
  return new Promise((resolve, reject) => {
    const PageInfo = JSON.parse(params.data.page);
    PageInfo.consentCookie = params.data.consentCookie;

    const sheets = new ServerStyleSheets();

    const app = (
      <StaticRouter location={params.url} context={params}>
        <MyStateProvider PageInfo={PageInfo}>
          <MyApp />
        </MyStateProvider>
      </StaticRouter>
    );

    const html = renderToString(
      sheets.collect(app),
    );

    const css = sheets.toString();

    const renderFullPage = () => {
      return `${html}<style>${css}</style>`;
    };

    resolve({
      html: renderFullPage(),
      globals: {
        MyInitialState: PageInfo,
      },
    }, reject);
  });
});
