/* eslint-disable padded-blocks */
/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */
import '@babel/polyfill';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { createServerRenderer } from 'aspnet-prerendering';
import MyTest from './Components/Test/Test';

export default createServerRenderer(params => {
  return new Promise((resolve, reject) => {

    // const PageInfo = JSON.parse(params.data.page);

    // setGlobal({
    //   language: 'PT'
    // });

    const app = (
      <StaticRouter location={params.url} context={params}>
        <MyTest />
      </StaticRouter>
    );

    resolve({
      html: renderToString(app),
      // globals: {
      //   MyInitialState: JSON.parse(params.data.page)
      // }
    }, reject);

  });
});
