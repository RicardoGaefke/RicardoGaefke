import React from 'react';
import { Box } from '@material-ui/core';
import { ResponsiveAreaBump } from '@nivo/bump';
import initialData from './InitialData';

const MyInitialGraphic = (): React.ReactElement<any> => {
  const data: any = initialData;

  return (
    <Box style={{ height: 500 }}>
      deu pau
      <ResponsiveAreaBump
        data={data}
        margin={
          {
            top: 40, right: 100, bottom: 40, left: 100,
          }
        }
        spacing={8}
        theme={{ background: 'white' }}
        colors={{ scheme: 'orange_red' }}
        blendMode="multiply"
        startLabel="id"
        axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: -36,
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
      />
    </Box>
  );
};

export default MyInitialGraphic;
