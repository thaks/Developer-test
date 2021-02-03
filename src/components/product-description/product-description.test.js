import React from 'react'
import ProductDescription from './product-description'

import {configure, shallow, mount} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter() })

describe("<ProductDescription/> Component Unit Test", () => {

    let component;
    beforeEach(() => {
        component = shallow(<ProductDescription description="long test description" />)
    })

    it("Should render ProductDescription Component", () => {
        expect(component).toHaveLength(1)
        expect(component.find('p.product-description')).toHaveLength(1)
    })

    it("Should render props correctly", () => {
        expect(component.props().children).toEqual("long test description")
    })
    
    it("Should set props correctly", () => {
        component.setProps({description: "another long test description"})
        expect(component.props().children).toEqual("another long test description")
    })
})