import * as React from 'react'
import { Link } from 'react-router-dom'
import { InterfaceSearchBoxAutocompleteItem } from '../reducers/state'

export class AutocompleteItem extends React.Component<InterfaceSearchBoxAutocompleteItem, any> {
    public render() {
        return (
            <Link className='search-box__item' to={`/content/${this.props.item.id}`}>
                { 
                    this.props.item.thumbnail ? 
                    <div className="search-box__thumbnail">
                        <img src={this.props.item.thumbnail} alt={this.props.item.title}/>
                    </div> : '' 
                }
                <div className='search-box__info'>
                    <div className='search-box__title'>{this.props.item.title}</div>
                    <div className='search-box__description'>{this.props.item.description}</div>
                </div>
            </Link>
        )
    }
}
