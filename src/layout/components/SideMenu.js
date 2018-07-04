/* @flow */

import React, { Component } from 'react'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import SendIcon from '@material-ui/icons/Send'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Divider from '@material-ui/core/Divider'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleSideBar } from './../actions/layout'

export class SideMenu extends Component {
  static propTypes = {
    isMenuOpen: PropTypes.bool.isRequired,
    hideSideBar: PropTypes.func.isRequired,
    openSideBar: PropTypes.func.isRequired,
  }
  render() {
    return (
      <SwipeableDrawer
        open={this.props.isMenuOpen}
        onClose={this.props.hideSideBar}
        onOpen={this.props.openSideBar}
        >
        <div className="sidebar">
          <div>
            <IconButton onClick={this.props.hideSideBar}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className="sidebar__content">
            <MenuList>
              <MenuItem>
                <ListItemIcon >
                  <SendIcon />
                </ListItemIcon>
                <ListItemText inset primary="Sent mail" />
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText inset primary="Drafts" />
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText inset primary="Inbox" />
              </MenuItem>
            </MenuList>
          </div>
        </div>
      </SwipeableDrawer>
    )
  }
}

const mapStateToProps = ({ layout }) => {
  return {
    isMenuOpen: layout.get('isMenuOpen')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideSideBar: () => {
      dispatch(toggleSideBar(false))
    },
    openSideBar: () => {
      dispatch(toggleSideBar(true))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)