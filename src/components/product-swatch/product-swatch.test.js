import React from 'react'
import ProductSwatch from './product-swatch.component'

import {configure, shallow, mount} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({adapter: new Adapter() })

describe("<ProductSwatch/> Component Unit Test", () => {

    let component;
    beforeEach(() => {
        component = shallow(<ProductSwatch/>)
    })

    it("Should render ProductSwatch Component", () => {
        expect(component).toHaveLength(1)
        expect(component.find('div.product-swatch')).toHaveLength(1)
    })
})