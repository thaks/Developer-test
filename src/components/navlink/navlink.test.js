import React from 'react'
import NavLink from './navlink.component'

import {configure, shallow, mount} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter() })

describe("<NavLink/> Component Unit Test", () => {

    let component;
    beforeEach(() => {
        component = shallow(<NavLink linkName="Men" linkType="Men" />)
    })

    it("Should render NavLink Component", () => {
        expect(component).toHaveLength(1)
        expect(component.find('div.navlink')).toHaveLength(1)
    })

    it("Should render props correctly", () => {
        expect(component.props().children).toEqual("Men")
    })
    
    it("Should set props correctly", () => {
        component.setProps({linkName: "Women", linkType: "Women"})
        expect(component.props().children).toEqual("Women")
    })
})