import React from 'react'

import {configure, shallow, mount} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ProductTitle from './product-title.component'
Enzyme.configure({adapter: new Adapter() })

describe("<ProductTitle/> Component Unit Test", () => {
    const mockFn = jest.fn;

    let component;
    beforeEach(() => {
        component = shallow(<ProductTitle />)
    })

    it("Should render ProductTitle Component", () => {
        expect(component).toHaveLength(1)
        expect(component.find('h2.product-title')).toHaveLength(1)
    })

})

