import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withStyles, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

export interface IDropDownItem {
  id: string,
  primary: string,
  onClick?: () => {}
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

const MyMenuItem = (props: IDropDownItem): any => {
  const { id, primary } = props;
  return (
    <StyledMenuItem key={id}>
      <ListItemText
        key={id}
        primary={primary}
        {...props}
      />
    </StyledMenuItem>
  );
};

export default MyMenuItem;
