import React from 'react'
import ProductImage from './product-image.component'

import {configure, shallow, mount} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter() })

describe("<ProductImage/> Component Unit Test", () => {

    let component;
    beforeEach(() => {
        component = shallow(<ProductImage imageUrl="https://www.testimage.com/test-image.jpg"/>)
    })

    it("Should render ProductImage Component", () => {
        expect(component).toHaveLength(1)
        expect(component.find('div.product-image')).toHaveLength(1)
    })

    it("Should render props correctly", () => {
        expect(component.props().children.props.src).toEqual("https://www.testimage.com/test-image.jpg")
    })
    
    it("Should set props correctly", () => {
        component.setProps({imageUrl: "https://www.testimage.com/test-image2.jpg"})
        expect(component.props().children.props.src).toEqual("https://www.testimage.com/test-image2.jpg")
    })
})