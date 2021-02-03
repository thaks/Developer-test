import React from 'react'
import ProductInfo from './product-info.component'

import {configure, shallow, mount} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter() })

describe("<ProductInfo/> Component Unit Test", () => {

    let component;
    beforeEach(() => {
        component = shallow(<ProductInfo product={{title: "Test Title"}}/>)
    })

    it("Should render ProductInfo Component", () => {
        expect(component).toHaveLength(1)
        expect(component.find('div.product-info')).toHaveLength(1)
    })
})