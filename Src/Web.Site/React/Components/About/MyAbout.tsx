import React from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import axios from 'axios';
import { useStateValue } from '../../Utils/StateProvider';
import MyLanguage from './language';

const MyAbout = (): any => {
  const [{ language }] = useStateValue();
  const texts: import('../../Components/About/language').IAboutLanguage = MyLanguage(language);

  const myClick = (): void => {
    axios('/api/email');
  };

  const myClickConnStr = (): void => {
    axios('/api/email/sendgrid');
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h2" gutterBottom>
        {texts.titulo}
      </Typography>

      <Typography variant="body2" gutterBottom>
        {texts.texto}
      </Typography>

      <Button
        variant="text"
        size="small"
        title="Axios"
        color="primary"
        onClick={myClick}
      >
        Send Message
      </Button>
      <Button
        variant="text"
        size="small"
        title="Axios"
        color="primary"
        onClick={myClickConnStr}
      >
        Get sg
      </Button>
    </Container>
  );
};

export default MyAbout;
