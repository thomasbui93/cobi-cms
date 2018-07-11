import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import DraftsIcon from '@material-ui/icons/Drafts'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import SendIcon from '@material-ui/icons/Send'
import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { IRootState } from '../../types/RootState'
import { toggleSideBar } from '../actions/layout'


interface ISideMenuProps {
    isMenuOpen: boolean,
    hideSideBar: () => void,
    openSideBar: () => void
}

export class SideMenu extends React.Component<ISideMenuProps> {
    public render() {
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
                                <ListItemText inset={true} primary="Sent mail" />
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <DraftsIcon />
                                </ListItemIcon>
                                <ListItemText inset={true} primary="Drafts" />
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText inset={true} primary="Inbox" />
                            </MenuItem>
                        </MenuList>
                    </div>
                </div>
            </SwipeableDrawer>
        )
    }
}

export const mapStateToProps = (state: IRootState) => {
    return {
        isMenuOpen: state.layout.get('isMenuOpen')
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
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