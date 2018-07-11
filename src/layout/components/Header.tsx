import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { LOGOUT, TITLE } from '../../services/constants'
import { IRootState } from '../../types/RootState'
import { toggleSideBar } from '../actions/layout'

interface IHeaderProps {
    isMenuOpen: boolean,
    openSideBar: () => void
}

export class Header extends React.Component<IHeaderProps, any> {
    public render() {
        return (
            <div >
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Menu"
                            onClick={this.props.openSideBar}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit">
                            {TITLE}
                        </Typography>
                        <Button color="inherit"> {LOGOUT} </Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export const mapStateToProps = (state: IRootState) => {
    return {
        isMenuOpen: state.layout.get('isMenuOpen')
    }
}

export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        openSideBar: () => {
            dispatch(toggleSideBar(true))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
