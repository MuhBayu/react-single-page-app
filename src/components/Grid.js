import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

class Grid extends Component {
   constructor(props) {
      super(props);
      this.state = {

      };
   }
   render() {
      const { classes } = this.props;

      return (
         <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
      );
   }
}
const tileData = [
   {
     img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
     title: 'Breakfast',
     author: 'author',
   },
   {
     img: 'https://material-ui.com/static/images/grid-list/burgers.jpg',
     title: 'Tasty burger',
     author: 'director90',
   },
   {
     img: 'https://material-ui.com/static/images/grid-list/camera.jpg',
     title: 'Camera',
     author: 'author',
   },
   {
     img: 'https://material-ui.com/static/images/grid-list/morning.jpg',
     title: 'Morning',
     author: 'author',
   },
   {
     img: 'https://material-ui.com/static/images/grid-list/hats.jpg',
     title: 'Hats',
     author: 'author',
   },
   {
     img: 'https://material-ui.com/static/images/grid-list/honey.jpg',
     title: 'Honey',
     author: 'author',
   },
];
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});
Grid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Grid);
