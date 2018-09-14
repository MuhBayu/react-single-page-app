import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { NavLink } from "react-router-dom";

class Simplebar extends Component {
   constructor() {
      super();
      this.state = {
         title:'Reactjs Simple SPA'
      }
   }
   render() {
      const { classes } = this.props;
      return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit" className={classes.grow}>
                {this.state.title}
              </Typography>
              <NavLink to="/" className={classes.textWhite}><Button color="inherit">Home</Button></NavLink>
              <NavLink to="/collection" className={classes.textWhite}><Button color="inherit">Collection</Button></NavLink>
              <NavLink to="/grid" className={classes.textWhite}><Button color="inherit">Grid</Button></NavLink>
              <NavLink to="/dialog" className={classes.textWhite}><Button color="inherit">Dialog</Button></NavLink>
              <NavLink to="/typograph" className={classes.textWhite}><Button color="inherit">Typograph</Button></NavLink>
            </Toolbar>
          </AppBar>
        </div>
      );
   }
}

Simplebar.propTypes = {
  classes: PropTypes.object.isRequired,
};
const styles = {
  textWhite: { color:'#FFFFFF' },
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
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

export default withStyles(styles)(Simplebar);
