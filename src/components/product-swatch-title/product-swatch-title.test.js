import React from 'react'

import {configure, shallow, mount} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ProductSwatchTitle from './product-swatch-title.compoent'
Enzyme.configure({adapter: new Adapter() })

describe("<ProductSwatchTitle/> Component Unit Test", () => {
    const mockFn = jest.fn;

    let component;
    beforeEach(() => {
        component = shallow(<ProductSwatchTitle />)
    })

    it("Should render ProductSwatchTitle Component", () => {
        expect(component).toHaveLength(1)
        expect(component.find('div.product-swatch-title')).toHaveLength(1)
    })

})