import React from 'react'
import ProductItemTitle from './product-item-title.component'

import {configure, shallow, mount} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter() })

describe("<ProductItemTitle/> Component Unit Test", () => {

    let component;
    beforeEach(() => {
        component = shallow(<ProductItemTitle title="Awesome T-Shirt"/>)
    })

    it("Should render ProductItemTitle Component", () => {
        expect(component).toHaveLength(1)
        expect(component.find('h3.product-item__title')).toHaveLength(1)
    })

    it("Should render props correctly", () => {
        expect(component.props().children).toEqual("Awesome T-Shirt")
    })
    
    it("Should set props correctly", () => {
        component.setProps({title: "New Shirt"})
        expect(component.props().children).toEqual("New Shirt")
    })
})