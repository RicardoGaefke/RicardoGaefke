import React from 'react';
import {
  Container, Typography, Grid, Box,
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { useStateValue } from '../../Utils/StateProvider';
import CompanyTexts from './CompanyTexts';

const MyDashboard = (): React.ReactElement<any> => {
  // eslint-disable-next-line no-unused-vars
  const [{ language, companySelect }, dispatch] = useStateValue();
  const myTexts = CompanyTexts(language);

  return (
    <>
      <Container
        style={{ paddingTop: 50, paddingBottom: 50 }}
        fixed
      >
        <Typography variant="h3" align="center" gutterBottom>
          {myTexts.title}
        </Typography>
        <Typography paragraph gutterBottom>
          {myTexts.text}
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </Typography>
        <Grid container alignContent="space-between" wrap="nowrap">
          <Box width={210} marginRight={0.5} my={5}>
            <Skeleton variant="rect" width={210} height={118} />
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
          <Box width={210} marginRight={0.5} my={5}>
            <Skeleton variant="rect" width={210} height={118} />
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
          <Box width={210} marginRight={0.5} my={5}>
            <Skeleton variant="rect" width={210} height={118} />
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
          <Box width={210} marginRight={0.5} my={5}>
            <Skeleton variant="rect" width={210} height={118} />
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
          <Box width={210} marginRight={0.5} my={5}>
            <Skeleton variant="rect" width={210} height={118} />
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default MyDashboard;
