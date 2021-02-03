import React from 'react'

import {configure, shallow, mount} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ProductSwatchItem from './product-swatch-item.component'
Enzyme.configure({adapter: new Adapter() })

describe("<ProductSwatchItem/> Component Unit Test", () => {
    const mockFn = jest.fn;

    let component;
    beforeEach(() => {
        component = shallow(<ProductSwatchItem swatch="Size" handleClick={mockFn}/>)
    })

    it("Should render ProductSwatchItem Component", () => {
        expect(component).toHaveLength(1)
        expect(component.find('div.product-swatch-item')).toHaveLength(1)
    })

})