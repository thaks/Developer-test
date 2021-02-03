import React from 'react'
import ProductItemImage from './product-item-image.component'

import {configure, shallow, mount} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter() })

describe("<ProductItemImage/> Component Unit Test", () => {

    let component;
    beforeEach(() => {
        component = shallow(<ProductItemImage image="https://www.testimage.com/test-image.jpg"/>)
    })

    it("Should render ProductItemImage Component", () => {
        expect(component).toHaveLength(1)
        expect(component.find('div.product-item__imagebox')).toHaveLength(1)
    })

    it("Should render props correctly", () => {
        expect(component.props().children.props.src).toEqual("https://www.testimage.com/test-image.jpg")
    })
    
    it("Should set props correctly", () => {
        component.setProps({image: "https://www.testimage.com/test-image2.jpg"})
        expect(component.props().children.props.src).toEqual("https://www.testimage.com/test-image2.jpg")
    })
})