import * as React from 'react'
import { Helmet } from 'react-helmet'

export interface InterfacePageHeaderProps {
    title: string,
    description: string,
    meta: InterfacePageMeta,
    classes?: string | string[]
}

export interface InterfacePageMeta {
    title: string,
    description: string
}

export class PageHeader extends React.Component<InterfacePageHeaderProps> {
    public render() {
        return (
            <div className={`page-header ${this.props.classes ? this.props.classes : '' }`}>
                <h1 className='page-header__title'>
                    {this.props.title}
                </h1>
                <p className='page-header__description'>
                    {this.props.description}
                </p>
                <Helmet>
                    <title>{this.props.meta.title}</title>
                    <meta name='description' content={this.props.meta.description} />
                </Helmet>
            </div>
        )
    }
}