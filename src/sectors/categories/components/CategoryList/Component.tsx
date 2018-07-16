import * as React from 'react'
import { Dispatch, ActionCreator } from 'redux'
import { connect } from 'react-redux'
import { requestCategories } from '../../actions/categories'
import { ICategoriesState } from '../../reducers/state';
import { IRequestInfo } from '../../reducers/filters';

interface InterfaceCategoryListProps extends ICategoriesState {
    requestCategoryList: ActionCreator<any>
}

export class CategoryList extends React.Component<InterfaceCategoryListProps> {
    public componentDidMount() {
        this.props.requestCategoryList();
    }
    public render() {
        return <div>
            {this.props.isLoading ? 'Is Loading' : ''}
            {this.props.error ? 'Error happened while retrieving categories' : ''}
            {this.props.categories.map(category => {
                return <div key={category.title}>
                    { category.title }
                </div>
            })}
        </div>
    }
}

export function mapStateToProps({ categoryList }: { categoryList: ICategoriesState }) {
    return {
        categories: categoryList.categories,
        error: categoryList.error,
        isLoading: categoryList.isLoading
    }
}

export function mapDispatchToProps(dispatch: Dispatch) {
    return {
        requestCategoryList: (requestInfo?: IRequestInfo) => dispatch(requestCategories(requestInfo))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)