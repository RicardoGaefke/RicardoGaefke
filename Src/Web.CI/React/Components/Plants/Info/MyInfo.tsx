import React from 'react';
import { Typography } from '@material-ui/core/';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useStateValue } from '../../../Utils/StateProvider';

const useStyles = makeStyles((theme: Theme): any => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(7),
    right: theme.spacing(2),
  },
}));

const MyInfo = (): React.ReactElement<any> => {
  const [{ language }] = useStateValue();
  const classes: any = useStyles();

  return (
    <>
      <Typography>
        {language}
        - Lista de plantas
      </Typography>
      <Fab color="primary" aria-label="add" className={classes.fab}>
        <AddIcon />
      </Fab>
    </>
  );
};

export default MyInfo;
