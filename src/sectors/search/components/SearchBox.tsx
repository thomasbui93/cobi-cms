import * as React from 'react'
import 'whatwg-fetch'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Link } from 'react-router-dom'

import { AutocompleteItem } from './AutocompleteItem'
import { InterfaceSearchBoxProps, InterfaceSearchBoxState } from '../reducers/state'
import { requestAutocomplete } from '../actions/autocomplete'

interface InterfaceSearchBoxComponentProps extends InterfaceSearchBoxProps {
    requestAutocomplete: (queryValue: string) => any
}

export class SearchBox extends React.Component<InterfaceSearchBoxComponentProps, InterfaceSearchBoxState> {
    public static defaultProps: Partial<InterfaceSearchBoxProps> = {
        items: [],
        isLoading: false,
        error: false
    }

    public state: InterfaceSearchBoxState = {
        queryValue: '',
        displayAutoCompleteBox: false
    }

    public constructor(props: InterfaceSearchBoxComponentProps) {
        super(props)
        this.queryAutocomplete = this.queryAutocomplete.bind(this)
        this.isEnableAutoComplete = this.isEnableAutoComplete.bind(this)
        this.handleEscapeInteractions = this.handleEscapeInteractions.bind(this)
    }

    public queryAutocomplete(event: any) {
        const queryValue = event.target.value
        this.setState({ queryValue })
        if (this.isEnableAutoComplete()) {
            this.props.requestAutocomplete(queryValue)
        }
    }

    public isEnableAutoComplete():boolean {
        return this.state.queryValue.length >= 3 && this.state.displayAutoCompleteBox;
    }

    public handleEscapeInteractions(event: any) {
        if(event.keyCode === 27 || typeof event.keyCode === 'undefined') {
            this.setState({
                displayAutoCompleteBox: false
            })
        } else {
            this.setState({
                displayAutoCompleteBox: true
            })
        }
    }

    public render() {
        return (
            <div className='search-box'>
                <div className='search-box__input'>
                    <input type='text'
                        value={this.state.queryValue}
                        onKeyDown={this.handleEscapeInteractions}
                        onBlur={this.handleEscapeInteractions}
                        onChange={this.queryAutocomplete}
                        placeholder='Enter your query' />
                </div>
                {
                    this.isEnableAutoComplete() ?
                    <div className='search-box__autocomplete'>
                        {
                            this.props.isLoading ?
                                <span>Loading...</span> :
                                this.props.items.map(item => <AutocompleteItem item={item} key={item.id} />)
                        }
                        {
                            this.state.queryValue.length !== 0 ?
                                <Link to={`/search/${this.state.queryValue}`} className='button is-primary search-box__submit'>
                                    Search all content including {this.state.queryValue}
                                </Link> : ''
                        }
                    </div> : ''
                }
                
            </div>
        )
    }
}

export function mapStateToProps({ autocomplete }: { autocomplete: InterfaceSearchBoxProps }) {
    return {
        items: autocomplete.items,
        error: autocomplete.error,
        isLoading: autocomplete.isLoading
    }
}

export function mapDispatchToProps(dispatch: Dispatch) {
    return {
        requestAutocomplete: (queryValue: string) => dispatch(requestAutocomplete(queryValue))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)