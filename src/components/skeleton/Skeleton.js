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
            <Grid item xs={12} sm={6} md={4} lg={3} >
              <SkeletonTheme>
                <Skeleton height={100}  circle={true} />

                <p>
                  <Skeleton count={5}  circle={true} />
                </p>
              </SkeletonTheme>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} >
              <SkeletonTheme>
                <Skeleton height={100}  circle={true} />

                <p>
                  <Skeleton count={5}  circle={true} />
                </p>
              </SkeletonTheme>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} >
              <SkeletonTheme>
                <Skeleton height={100}  circle={true} />

                <p>
                  <Skeleton count={5}  circle={true} />
                </p>
              </SkeletonTheme>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} >
              <SkeletonTheme>
                <Skeleton height={100}  circle={true} />

                <p>
                  <Skeleton count={5}  circle={true} />
                </p>
              </SkeletonTheme>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} >
              <SkeletonTheme>
                <Skeleton height={100}  circle={true} />

                <p>
                  <Skeleton count={5}  circle={true} />
                </p>
              </SkeletonTheme>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} >
              <SkeletonTheme>
                <Skeleton height={100}  circle={true} />

                <p>
                  <Skeleton count={5}  circle={true} />
                </p>
              </SkeletonTheme>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} >
              <SkeletonTheme>
                <Skeleton height={100}  circle={true} />

                <p>
                  <Skeleton count={5}  circle={true} />
                </p>
              </SkeletonTheme>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} >
              <SkeletonTheme>
                <Skeleton height={100}  circle={true} />

                <p>
                  <Skeleton count={5}  circle={true} />
                </p>
              </SkeletonTheme>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} >
              <SkeletonTheme>
                <Skeleton height={100}  circle={true} />

                <p>
                  <Skeleton count={5}  circle={true} />
                </p>
              </SkeletonTheme>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  )
}


export default Home;
