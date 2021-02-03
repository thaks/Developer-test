import React from 'react'
import Button from './button.component'

import {configure, shallow, mount} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter() })

describe("<Button/> Component Unit Test", () => {
    const mockFunction = jest.fn;

    let component;
    beforeEach(() => {
        component = shallow(<Button title="Add To Cart" handleClick={mockFunction} />)
    })

    it("Should render Button Component", () => {
        expect(component).toHaveLength(1)
        expect(component.find('div.button')).toHaveLength(1)
    })

    it("Should render props correctly", () => {
        console.log(component.props())
        expect(component.props().children).toEqual("Add To Cart")
    })
    
    it("Should set props correctly", () => {
        component.setProps({title: "View More"})
        expect(component.props().children).toEqual("View More")
    })

})