import React from 'react'
import ProductItem from './product-item.component'

import {configure, shallow, mount} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter() })

describe("<ProductItem/> Component Unit Test", () => {

    let component;
    beforeEach(() => {
        component = shallow(<ProductItem product={{title: "Test Title"}}/>)
    })

    it("Should render ProductItem Component", () => {
        expect(component).toHaveLength(1)
        expect(component.find('div.product-item')).toHaveLength(1)
    })
})