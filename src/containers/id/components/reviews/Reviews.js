import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { useStyles } from './styles';
//materia ui
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@material-ui/core/Typography';


function Reviews({mediaType}) {

  const classes = useStyles();

  const reviews = useSelector(state => state.movieReducer.reviews);

  return (
    <>
      <div className={classes.root}>
        <Container fixed>
          <Grid 
            container 
            spacing={3} 
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} className={classes.paper}>
              <h1>Comentarios</h1>
            </Grid>
            <Grid item xs={12} className={classes.review}>
              {reviews && reviews.map((element, key) => (
                <ExpansionPanel key={key}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${key}a-content`}
                    id={`panel${key}a-header`}
                  >
                    <Typography>{key} {element.author}</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      {element.content}
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              ))}
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  )
}

Reviews.propTypes = {
  review: PropTypes.array
}

export default Reviews;
