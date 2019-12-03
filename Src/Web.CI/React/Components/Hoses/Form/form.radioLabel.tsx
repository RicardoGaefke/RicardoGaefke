import React from 'react';
import { Tooltip, Typography } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

interface IProps {
  label: string,
  title: string,
}

const RadioLabel = (props: IProps): React.ReactElement<IProps> => {
  const { label, title } = props;

  return (
    <>
      <Tooltip
        arrow
        placement="right"
        title={(
          <Typography variant="body2">
            {label}
          </Typography>
        )}
      >
        <InfoIcon fontSize="inherit" />
      </Tooltip>
      &nbsp;
      {title}
    </>
  );
};

export default RadioLabel;
