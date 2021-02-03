import React from 'react'
import SubTitle from './subtitle.component'

import {configure, shallow, mount} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter() })

describe("<SubTitle/> Component Unit Test", () => {
    // TEST PROPS
    const props = {
        subtitle: "FEATURED PRODUCTS"
    }

    let component;
    beforeEach(() => {
        component = shallow(<SubTitle subtitle={props.subtitle} />)
    })

    it("Should render SubTitle Component", () => {
        expect(component).toHaveLength(1)
        expect(component.find('div.subtitle')).toHaveLength(1)
    })

    it("Should render props correctly", () => {
        console.log(component.props())
        expect(component.props().children).toEqual("FEATURED PRODUCTS")
    })
    
    it("Should set props correctly", () => {
        component.setProps({subtitle: "SEE MORE PRODUCTS"})
        expect(component.props().children).toEqual("SEE MORE PRODUCTS")
    })
})