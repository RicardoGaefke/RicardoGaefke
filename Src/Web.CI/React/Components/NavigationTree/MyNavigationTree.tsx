import React, { useState } from 'react';
import { Link as RLink, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// eslint-disable-next-line no-unused-vars
import Typography from '@material-ui/core/Typography';
import TreeView from '@material-ui/lab/TreeView';
import Box from '@material-ui/core/Box';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// eslint-disable-next-line no-unused-vars
import TreeItem, { TreeItemProps } from '@material-ui/lab/TreeItem';
import { useStateValue } from '../../Utils/StateProvider';
import myStaticData from './StaticData';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 450,
  },
});

const MyNavigationTree = (props: any): React.ReactElement<any> => {
  const classes = useStyles({});
  const [{ language }] = useStateValue();
  const [activeItemId, setActiveItemId] = useState();
  const { history } = props;
  const staticData = myStaticData(language);

  const renderLabel = (item): React.ReactElement<any> => (
    <Box
      display="flex"
      style={{
        padding: 4,
        // backgroundColor: item.id === activeItemId ? 'yellow' : 'inherit',
      }}
      onClick={(event): void => {
        setActiveItemId(item.id);
        history.push(item.id);
        event.stopPropagation();
        event.preventDefault();
      }}
    >
      <Button
        title={item.title}
        variant={item.id === activeItemId ? 'contained' : 'text'}
        component={RLink}
        to={item.id}
      >
        {item.title}
      </Button>
    </Box>
  );

  const renderItem = (item): React.ReactElement<any> => (
    <TreeItem
      key={item.id}
      nodeId={item.id}
      label={renderLabel(item)}
      onKeyDown={(event): void => {
        if (event.keyCode === 13) {
          setActiveItemId(item.id);
          event.stopPropagation();
        }
      }}
    >
      {item.children && item.children.length > 0
        ? item.children.map(renderItem)
        : null}
    </TreeItem>
  );

  return (
    <>
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {staticData.map(renderItem)}
      </TreeView>
    </>
  );
};

export default withRouter(MyNavigationTree);
