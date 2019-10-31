import React from 'react';
import Button from '@material-ui/core/Button';

// interface MyProps {
//   text: string,
//   href: string,
//   onClick: ()=>{}
// }

const MyButton = (props: any): any => (
  <Button
    {...props}
  />
);

export default MyButton;
