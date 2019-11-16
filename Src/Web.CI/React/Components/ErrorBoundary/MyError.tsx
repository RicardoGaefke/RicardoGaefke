import React from 'react';
import { Link as RLink } from 'react-router-dom';
import { Container, Typography, Button } from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Home from '@material-ui/icons/Home';
import { useStateValue } from '../../Utils/StateProvider';
import { MyErrorTexts } from './MyErrorTexts';

interface IMyErrorProps {
  clearError: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

const useStyles = makeStyles((theme: Theme): any => ({
  homeIcon: {
    marginRight: theme.spacing(1),
  },
}));

const MyError = (props: IMyErrorProps): any => {
  const [{ language }] = useStateValue();
  const { clearError } = props;
  const MyTexts = MyErrorTexts(language);
  const classes: any = useStyles();

  return (
    <Container maxWidth="xl" style={{ paddingTop: '40px', paddingBottom: '15px' }}>
      <Typography variant="h2" gutterBottom align="center">
        {MyTexts.title}
      </Typography>
      <Typography variant="body1" gutterBottom align="center">
        {MyTexts.text}
      </Typography>
      <Typography align="center">
        <Button
          title="Home page"
          variant="outlined"
          component={RLink}
          to="/"
          onClick={clearError}
        >
          <Home className={classes.homeIcon} />
          Home Page
        </Button>
      </Typography>
    </Container>
  );
};

export default MyError;
