import React from 'react'
import ProductSwatchGrid from './product-swatch-grid.component'

import {configure, shallow, mount} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({adapter: new Adapter() })

describe("<ProductSwatchGrid/> Component Unit Test", () => {

    let component;
    beforeEach(() => {
        component = shallow(<ProductSwatchGrid/>)
    })

    it("Should render ProductSwatchGrid Component", () => {
        expect(component).toHaveLength(1)
        expect(component.find('div.product-swatch-grid')).toHaveLength(1)
    })
})