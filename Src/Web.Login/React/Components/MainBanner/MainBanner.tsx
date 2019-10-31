import React from 'react';
import { Link as RLink } from 'react-router-dom';
import {
  // eslint-disable-next-line no-unused-vars
  Container, Typography, Button, makeStyles, createStyles, Theme,
} from '@material-ui/core';
import Octicon, { LogoGithub, MarkGithub } from '@primer/octicons-react';
import { useStateValue } from '../../Utils/StateProvider';
// eslint-disable-next-line no-unused-vars
import { IMyBanner, MyBannerLanguage } from './languages';

const useStyles = makeStyles((theme: Theme): any => createStyles({
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  myPaper: {
    marginBottom: theme.spacing(3),
  },
}));

const MyMainBanner = (): any => {
  const [{ language }] = useStateValue();
  const myLanguage = MyBannerLanguage(language);
  const classes: any = useStyles();

  return (
    <Container maxWidth="xl">
      <Typography variant="h2" align="center" gutterBottom style={{ paddingTop: '40px', paddingBottom: '15px' }}>
        .NET Core + SSR React
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Login page
      </Typography>
      <Typography variant="body1" align="center" style={{ paddingTop: '20px', paddingBottom: '15px' }}>
        <Button variant="outlined" href="https://github.com/RicardoGaefke/RicardoGaefke" target="_blank">
          <Octicon icon={LogoGithub} />
          <span className={classes.rightIcon}>
            <Octicon icon={MarkGithub} ariaLabel="GitHub project repository" />
          </span>
        </Button>
      </Typography>

      <Typography align="center" className={classes.myPaper}>
        <Button
          title={myLanguage.home}
          variant="text"
          component={RLink}
          to="/"
        >
          {myLanguage.home}
        </Button>
        <Button
          title={myLanguage.about}
          variant="text"
          component={RLink}
          to="/About/"
        >
          {myLanguage.about}
        </Button>
        <Button
          title={myLanguage.privacy}
          variant="text"
          component={RLink}
          to="/Policy/"
        >
          {myLanguage.privacy}
        </Button>
        <Button
          title={myLanguage.notFound}
          variant="text"
          component={RLink}
          to="/NotFound/"
        >
          {myLanguage.notFound}
        </Button>
        <Button
          title={myLanguage.forbidden}
          variant="text"
          component={RLink}
          to="/Forbidden/"
        >
          {myLanguage.forbidden}
        </Button>
        <Button
          title={myLanguage.error}
          variant="text"
          component={RLink}
          to="/Error/"
        >
          {myLanguage.error}
        </Button>
      </Typography>
    </Container>
  );
};

export default MyMainBanner;
