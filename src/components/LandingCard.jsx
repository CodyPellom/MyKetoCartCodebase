import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ketoImg from '../images/ketoFood1.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function LandingCard() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
        Welcome to MyKetoCart
        </Typography>
        <Typography component="p">
          MyKetoCart is here to help you become more healthy and more importantly, Happy. The keto "diet craze" has been
          picking up but Keto isn't a diet; It is a simple way of living and eating. Keto can help nurish your body with 
          simple, wholesome and healthy ingrediants; Simple food and simple living. 
            <br/><br/>
          Our goal is to help you find the right food and technology to help you reach your keto goals. We have partnered 
          with some of the best food and tech providers in the industry in order to bring health conscious items to your door.

        
        </Typography>
      </Paper>
      <br/><br/>
      <Paper>
          <img id="keto-front-page-img"src={ketoImg} alt="mainImg" />
      </Paper>
    </div>
  );
}