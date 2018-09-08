import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { PageHeader } from './PageHeader'
import { shallow } from 'enzyme'
import { Helmet } from 'react-helmet'

describe('PageHeader component', () => {
    const examplePageHeader = {
        title: 'Home',
        description: 'Home Page',
        meta: {
            title: 'Home',
            description: 'Home Page'
        },
        classes: 'sample'
    }

    it('renders correctly', () => {
        const tree = renderer
            .create(<PageHeader
                title={examplePageHeader.title}
                description={examplePageHeader.description}
                meta={examplePageHeader.meta}
                classes={examplePageHeader.classes}
            />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('should contain Helmet, title and description', () => {
        const header = shallow(<PageHeader
            title={examplePageHeader.title}
            description={examplePageHeader.description}
            meta={examplePageHeader.meta}
            classes={examplePageHeader.classes}
        />)
        expect(header.find(Helmet).length).toBe(1)
        expect(header.find('.page-header__title').length).toBe(1)
        expect(header.find('.page-header__description').length).toBe(1)
    })

    it('getClassName should return associated string if classes props is string or none', () => {
        const header = shallow(<PageHeader
            title={examplePageHeader.title}
            description={examplePageHeader.description}
            meta={examplePageHeader.meta}
            classes={examplePageHeader.classes}
        />)
        expect((header.instance() as PageHeader).getClassName()).toBe('sample')
    })

    it('getClassName should return concat class names if classes props is an array', () => {
        const header = shallow(<PageHeader
            title={examplePageHeader.title}
            description={examplePageHeader.description}
            meta={examplePageHeader.meta}
            classes={['sa', 'mp', 'le']}
        />)
        expect((header.instance() as PageHeader).getClassName()).toBe('sa mp le')
    })
})