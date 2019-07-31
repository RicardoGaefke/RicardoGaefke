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
      <Typography variant="h2" align="center" gutterBottom>
        {texts.titulo}
      </Typography>

      <Typography variant="body2" align="center" gutterBottom>
        {texts.texto}
      </Typography>

      <Typography align="center" gutterBottom>
        <Button
          variant="contained"
          color="primary"
          size="small"
          title="Send message"
          onClick={myClick}
        >
          Send Message
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          title="Get SG Key"
          onClick={myClickConnStr}
        >
          Get sg
        </Button>
      </Typography>
    </Container>
  );
};

export default MyAbout;
