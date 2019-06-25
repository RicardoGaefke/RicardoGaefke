import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withStyles, Theme } from '@material-ui/core/styles';
// eslint-disable-next-line no-unused-vars
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Language from '@material-ui/icons/Language';
import MyButton from '../Button/MyButton';

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

const MyLanguageMenu = (props: any): any => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const classes: myprops | any = useStyles({});
  const { btnClass } = props;

  function handleClick(event: React.MouseEvent<HTMLElement>): void {
    setAnchorEl(event.currentTarget);
  }

  function handleClose(): any {
    setAnchorEl(null);
  }

  return (
    <div>
      <MyButton
        className={btnClass}
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        onClick={handleClick}
      >
        <Language />
      </MyButton>
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
