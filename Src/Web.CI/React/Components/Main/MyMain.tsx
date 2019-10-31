import React from 'react';
import MyErrorBoundary from '../ErrorBoundary/MyErrorBoundary';
import MyHome from '../../Views/Home/Home';

const MyRoutes = (): React.ReactElement<any> => (
  <MyErrorBoundary>
    <MyHome />
  </MyErrorBoundary>
);

export default MyRoutes;
