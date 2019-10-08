import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  fade, withStyles, Theme, createStyles,
} from '@material-ui/core/styles';
// eslint-disable-next-line no-unused-vars
import TreeItem, { TreeItemProps } from '@material-ui/lab/TreeItem';
import TransitionComponent from './TransitionComponent';

const StyledTreeItem = withStyles((theme: Theme): any => createStyles({
  root: {
    alignItems: 'top',
  },
  content: {
    alignItems: 'top',
  },
  iconContainer: {
    // paddingLeft: 12,
    '& .close': {
      opacity: 0.3,
    },
  },
  group: {
    marginLeft: 12,
    paddingLeft: 12,
    borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`,
  },
}))((props: TreeItemProps): any => <TreeItem {...props} TransitionComponent={TransitionComponent} />);

export default StyledTreeItem;
