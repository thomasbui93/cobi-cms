import * as React from 'react'
import { connect } from 'react-redux'
import { ICategoriesState } from '../../reducers/state';

export class CategoryList extends React.Component<ICategoriesState> {
    public render() {
        return <div>
            {this.props.isLoading ? 'Is Loading' : ''}
            {this.props.error ? 'Error happened while retrieving categories' : ''}
            {this.props.items.map(item => {
                return <div key={item.id}>
                    { item.title }
                </div>
            })}
        </div>
    }
}

export function mapStateToProps({ categoryList }: { categoryList: ICategoriesState }) {
    return {
        items: categoryList.items,
        error: categoryList.error,
        isLoading: categoryList.isLoading
    }
}


export default connect(mapStateToProps)(CategoryList)