import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { useStateValue } from '../../Utils/StateProvider';
import MyLanguage from './language';

const MyAbout = (): any => {
  const [{ language }] = useStateValue();
  const texts: import('../../Components/About/language').IAboutLanguage = MyLanguage(language);

  return (
    <Container maxWidth="md">
      <Typography variant="h2" gutterBottom>
        {texts.titulo}
      </Typography>

      <Typography variant="body2" gutterBottom>
        {texts.texto}
      </Typography>
    </Container>
  );
};

export default MyAbout;
