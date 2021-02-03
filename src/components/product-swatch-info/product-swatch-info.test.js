import React from 'react'
import ProductSwatchInfo from './product-swatch-info.component'

import {configure, shallow, mount} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({adapter: new Adapter() })

describe("<ProductSwatchInfo/> Component Unit Test", () => {

    let component;
    beforeEach(() => {
        component = shallow(<ProductSwatchInfo/>)
    })

    it("Should render ProductSwatchInfo Component", () => {
        expect(component).toHaveLength(1)
        expect(component.find('div.product-swatch-info')).toHaveLength(1)
    })
})