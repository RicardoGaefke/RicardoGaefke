/* eslint-disable max-len */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const PointSquare = (props: SvgIconProps): React.ReactElement<any> => (
  <SvgIcon fontSize="inherit" {...props}>
    <path d="M16,8H8V16H16V8Z" />
  </SvgIcon>
);

export default PointSquare;
