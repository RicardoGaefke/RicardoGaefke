import React from 'react';
import { Link as RLink } from 'react-router-dom';
import { Container, Typography, Link } from '@material-ui/core';
import { useStateValue } from '../../Utils/StateProvider';
import { MyForbiddenLanguage } from './MyForbiddenLanguage';

const MyForbidden = (): any => {
  const [{ language }] = useStateValue();
  const MyTexts = MyForbiddenLanguage(language);

  return (
    <Container maxWidth="md">
      <Typography variant="h2" gutterBottom>
        {MyTexts.title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {MyTexts.text}
        <Link
          title="Home page"
          color="textPrimary"
          underline="always"
          component={RLink}
          to="/"
        >
          Home Page
        </Link>
        ?
      </Typography>
    </Container>
  );
};

export default MyForbidden;
