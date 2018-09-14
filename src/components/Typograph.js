import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Typograph extends Component {
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
               <Typography className={classes.title} color="textSecondary">
                  Word of the Day
               </Typography>
               <Typography variant="headline" component="h2">
                  Typography
               </Typography>
               <Typography className={classes.pos} color="textSecondary">
                  adjective
               </Typography>
            </CardContent>
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
  pos: {
    marginBottom: 12,
  },
};
Typograph.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Typograph);
