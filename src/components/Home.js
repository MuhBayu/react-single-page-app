import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

class Home extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }
   render() {
      const { classes } = this.props;

      return (
      <div>
         <Card className={classes.card}>
            <CardContent>
               <Typography variant="headline" component="h2">
                  Home
               </Typography>
               <Typography component="p">
                  Homepage
               </Typography>
            </CardContent>
            <CardActions>
               <Button size="small" variant="outlined" onClick={() => window.open('http://github.com/MuhBayu')}>Github <Icon>link</Icon></Button>
            </CardActions>
         </Card>
      </div>
      );
   }
}
const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
};
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
