import React from 'react'

import {configure, shallow, mount} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ProductSwatchShow from './product-swatch-show.component'
Enzyme.configure({adapter: new Adapter() })

describe("<ProductSwatchShow/> Component Unit Test", () => {
    const mockFn = jest.fn;

    let component;
    beforeEach(() => {
        component = shallow(<ProductSwatchShow />)
    })

    it("Should render ProductSwatchShow Component", () => {
        expect(component).toHaveLength(1)
        expect(component.find('div.product-size-show')).toHaveLength(1)
    })

})