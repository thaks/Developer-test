import React from 'react'
import ProductItemPrice from './product-item-price.component'

import {configure, shallow, mount} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter() })

describe("<ProductItemPrice/> Component Unit Test", () => {

    let component;
    beforeEach(() => {
        component = shallow(<ProductItemPrice price="AED 500"/>)
    })

    it("Should render ProductItemPrice Component", () => {
        expect(component).toHaveLength(1)
        expect(component.find('p.product-item__price')).toHaveLength(1)
    })

    it("Should render props correctly", () => {
        expect(component.props().children).toEqual("AED 500")
    })
    
    it("Should set props correctly", () => {
        component.setProps({image: "AED 500"})
        expect(component.props().children).toEqual("AED 500")
    })
})