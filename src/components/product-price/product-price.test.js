import React from 'react'
import ProductPrice from './product-price.component'
import {configure, shallow, mount} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter() })

describe("<ProductPrice/> Component Unit Test", () => {

    let component;
    beforeEach(() => {
        component = shallow(<ProductPrice price="AED 100"/>)
    })

    it("Should render ProductPrice Component", () => {
        expect(component).toHaveLength(1)
        expect(component.find('p.product-price')).toHaveLength(1)
    })

    it("Should render props correctly", () => {
        expect(component.props().children).toEqual("AED 100")
    })
    
    it("Should set props correctly", () => {
        component.setProps({price: "AED 230"})
        expect(component.props().children).toEqual("AED 230")
    })
})