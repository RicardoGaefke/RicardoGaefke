import React from 'react';
// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Dialog, DialogContent, CircularProgress } from '@material-ui/core';

interface IProps {
  show: boolean
}

const useStyles = makeStyles((theme: Theme): any => createStyles({
  root: {
    margin: 'auto',
    padding: theme.spacing(2),
    display: 'flex',
    verticalAlign: 'middle',
  },
  child: {
    margin: 'auto',
    textAlign: 'center',
  },
}));

const FullModal = (props: IProps): React.ReactElement<IProps> => {
  const { show } = props;
  const classes: any = useStyles('');

  return (
    <>
      <Dialog
        open={show}
        fullScreen
        PaperProps={{
          style: {
            backgroundColor: 'rgba(255,255,255,0.2)',
            boxShadow: 'none',
          },
        }}
      >
        <DialogContent className={classes.root}>
          <div className={classes.child}>
            <CircularProgress />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FullModal;
