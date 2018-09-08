import * as React from 'react'
import { Link } from 'react-router-dom'
import SearchBox from '../../sectors/search/components/SearchBox'
import {TITLE} from '../../services/constants'

export interface InterfaceGlobalHeaderProps {
    threads: InterfaceMenuThread[],
    classes?: string | string[]
}

export interface InterfaceMenuThread {
    title: string,
    href: string
}

export class GlobalHeader extends React.Component<InterfaceGlobalHeaderProps> {
    public render() {
        return (
            <div className="global-header">
                <nav className="menu">
                    { 
                        this.props.threads.map(thread => (
                            <div className="menu__item" key={thread.href}>
                                <Link to={thread.href}>{thread.title}</Link>
                            </div>)
                        )
                    }
                </nav>
                <nav className="level logo-container">
                    <div className="level-item has-text-centered">
                        <span className="logo">{TITLE}</span>
                    </div>
                </nav>
                <div className="search-box__container">
                    <SearchBox />
                </div>
            </div>
        )
    }
}