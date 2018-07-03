/* @flow */
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { TITLE, LOGOUT } from '../../services/constants';
import { connect } from 'react-redux';
import { toggleSideBar } from './../actions/layout';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

export class Header extends Component {
  static propTypes = {
    openSideBar: PropTypes.func.isRequired,
    isMenuOpen: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.props.openSideBar}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              {TITLE}
            </Typography>
            <Button color="inherit"> {LOGOUT} </Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export const mapStateToProps = ({ layout }) => {
  return {
    isMenuOpen: layout.isMenuOpen
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    openSideBar: () => {
      dispatch(toggleSideBar(true))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));