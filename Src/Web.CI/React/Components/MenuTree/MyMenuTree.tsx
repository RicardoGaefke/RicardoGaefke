import React from 'react';
import {
  makeStyles, createStyles,
} from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import MinusSquare from './MinusSquare';
import PlusSquare from './PlusSquare';
import PointSquare from './PointSquare';
import StyledTreeItem from './StyledTreeItem';


const useStyles = makeStyles(
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

const MyTreeView = (): React.ReactElement<any> => {
  const classes = useStyles({});

  return (
    <TreeView
      className={classes.root}
      defaultExpanded={['1']}
      unselectable="on"
      defaultCollapseIcon={<MinusSquare />}
      defaultExpandIcon={<PlusSquare />}
      defaultEndIcon={<PointSquare />}
      onNodeToggle={
        (nodeId: string, expanded: boolean): void => {
          console.log(nodeId, expanded);
        }
      }
    >
      <StyledTreeItem nodeId="1" label="Dashboard" data-address="/dashboard/" />
      <StyledTreeItem nodeId="2" label="My account">
        <StyledTreeItem nodeId="3" label="Contact info" />
        <StyledTreeItem nodeId="4" label="Password" />
        <StyledTreeItem nodeId="5" label="Close connection" />
      </StyledTreeItem>
      <StyledTreeItem nodeId="6" label="My company">
        <StyledTreeItem nodeId="7" label="Users" />
        <StyledTreeItem nodeId="8" label="Clients" />
      </StyledTreeItem>
      <StyledTreeItem nodeId="9" label="My reports" />
      <StyledTreeItem nodeId="10" label="My plants" data-address="/company/" />
    </TreeView>
  );
};

export default MyTreeView;
