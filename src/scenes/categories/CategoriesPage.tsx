import * as React from 'react'
import { CATEGORIES_DESCRIPTION, CATEGORIES_META, CATEGORIES_TITLE } from '../../constants/page-title'
import { PageHeader } from '../../core/components/PageHeader/Component'

export const CategoriesPage = () => (
    <div className="categories-page">
        <PageHeader title={CATEGORIES_TITLE} 
            description={CATEGORIES_DESCRIPTION}
            meta={CATEGORIES_META} />
    </div>
)