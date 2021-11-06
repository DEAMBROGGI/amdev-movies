import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useStyles } from './styles';

function Home() {

  const classes = useStyles();
  
  return (
    <>
      <div className={classes.root}>
        <Container fixed>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={4}>
                  <SkeletonTheme >
                    <Skeleton height={300} />
                  </SkeletonTheme>
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                  <SkeletonTheme >
                    <Skeleton height={100} count={3} />
                  </SkeletonTheme>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  )
}


export default Home;
