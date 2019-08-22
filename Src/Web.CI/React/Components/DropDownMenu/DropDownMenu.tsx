import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withStyles, Theme } from '@material-ui/core/styles';
// eslint-disable-next-line no-unused-vars
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    borderRadius: 0,
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

const MyDropDownMenu = (props: any): any => {
  const {
    items, id, anchorEl, handleClose, keepMounted = true,
  } = props;

  return (
    <StyledMenu
      id={id}
      anchorEl={anchorEl}
      keepMounted={keepMounted}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      {...props}
    >
      {items.map((item): any => (
        <StyledMenuItem key={item.id}>
          <ListItemText primary={item.primary} onClick={item.onClick} />
        </StyledMenuItem>
      ))}
    </StyledMenu>
  );
};

export default MyDropDownMenu;
