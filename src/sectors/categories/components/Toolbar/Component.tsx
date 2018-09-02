import * as React from 'react'
import { Dispatch, ActionCreator } from 'redux'
import { connect } from 'react-redux'
import { requestCategories } from '../../actions/categories'
import { IRequestInfo } from '../../reducers/filters'
import { ICategoriesState } from '../../reducers/state';

export interface InterfaceToolbarProps {
    requestCategoryList: ActionCreator<any>
}

export class Toolbar extends React.Component<InterfaceToolbarProps> {
    public componentDidMount() {
        this.props.requestCategoryList()
    }
    public render() {
        return <div>
            <div>
                <strong>Filters:</strong>
            </div>
            <div>
                <strong>Sorters:</strong>
            </div>
            <div>
                <strong>Paginations:</strong>
            </div>
        </div>
    }
}

export function mapDispatchToProps(dispatch: Dispatch) {
    return {
        requestCategoryList: (requestInfo?: IRequestInfo) => dispatch(requestCategories(requestInfo))
    }
}

export function mapStateToProps({ categoryList }: { categoryList: ICategoriesState }) {
    return {
        items: categoryList.items,
        error: categoryList.error,
        isLoading: categoryList.isLoading
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)