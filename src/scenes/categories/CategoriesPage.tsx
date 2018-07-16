import * as React from 'react'

import { PageHeader } from '../../core/meta/PageHeader'
import { TITLE, DESCRIPTION, META } from '../../sectors/categories/constants/meta'
import CategoryList from '../../sectors/categories/components/CategoryList/Component'

export const CategoriesPage = () => (<div>
    <PageHeader title={TITLE}
        description={DESCRIPTION}
        meta={META}
    />
    <CategoryList />
</div>)