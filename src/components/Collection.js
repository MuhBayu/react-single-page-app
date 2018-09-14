import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

class Collection extends Component {
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
            <div className={classes.root}>
                  <List>
                    <ListItem>
                      <Avatar>
                        <ImageIcon />
                      </Avatar>
                      <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                    </ListItem>
                    <ListItem>
                      <Avatar>
                        <WorkIcon />
                      </Avatar>
                      <ListItemText primary="Work" secondary="Jan 7, 2014" />
                    </ListItem>
                    <ListItem>
                      <Avatar>
                        <BeachAccessIcon />
                      </Avatar>
                      <ListItemText primary="Vacation" secondary="July 20, 2014" />
                    </ListItem>
                  </List>
                </div>
            </CardContent>
         </Card>
      </div>
      );
   }
}
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});
Collection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Collection);
