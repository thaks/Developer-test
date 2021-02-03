import React from 'react'
import ProductRelatedGrid from './product-related-grid.component'

import {configure, shallow, mount} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter() })

describe("<ProductRelatedGrid/> Component Unit Test", () => {

    let component;
    beforeEach(() => {
        component = shallow(<ProductRelatedGrid />)
    })

    it("Should render ProductRelatedGrid Component", () => {
        expect(component).toHaveLength(1)
        expect(component.find('div.produt-related-grid')).toHaveLength(1)
    })
})