import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  withStyles, makeStyles, createStyles, Theme,
} from '@material-ui/core/styles';
// eslint-disable-next-line no-unused-vars
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
import Language from '@material-ui/icons/Language';
import ListItemText from '@material-ui/core/ListItemText';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props: MenuProps): any => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
));

const useStyles = makeStyles((theme: Theme): any => createStyles({
  button: {
    margin: theme.spacing(0),
    boxShadow: '0 0 0 0',
    paddingLeft: '8px',
    paddingRight: '8px',
    backgroundColor: 'transparent',
    color: '#fff',
  },
  input: {
    display: 'none',
  },
}));

interface myprops {
  button: string,
  input: string,
}

const StyledMenuItem = withStyles((theme): any => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const MyLanguageMenu = (): any => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const classes: myprops | any = useStyles({});

  function handleClick(event: React.MouseEvent<HTMLElement>): any {
    setAnchorEl(event.currentTarget);
  }

  function handleClose(): any {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        className={classes.button}
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        onClick={handleClick}
      >
        <Language />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemText primary="English" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Português" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
};

export default MyLanguageMenu;
