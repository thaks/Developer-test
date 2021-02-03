import React from 'react'
import ProductRelatedItem from './product-related-item.component'

import {configure, shallow, mount} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({adapter: new Adapter() })

describe("<ProductRelatedItem/> Component Unit Test", () => {

    let component;
    beforeEach(() => {
        component = shallow(<ProductRelatedItem/>)
    })

    it("Should render ProductRelatedItem Component", () => {
        expect(component).toHaveLength(1)
        expect(component.find('div.product-related-item')).toHaveLength(1)
    })
})