import React from 'react'
import ProductGrid from './product-grid.component'

import {configure, shallow, mount} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter() })

describe("<ProductGrid/> Component Unit Test", () => {

    let component;
    beforeEach(() => {
        component = shallow(<ProductGrid />)
    })

    it("Should render ProductGrid Component", () => {
        expect(component).toHaveLength(1)
        expect(component.find('div.product-grid')).toHaveLength(1)
    })
})