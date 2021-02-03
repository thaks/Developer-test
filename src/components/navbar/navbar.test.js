import React from 'react'
import NavBar from './navbar.component'

import {configure, shallow, mount} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter() })

describe("<NavBar/> Component Unit Test", () => {

    let component;
    beforeEach(() => {
        component = shallow(<NavBar />)
    })

    it("Should render NavBar Component", () => {
        expect(component).toHaveLength(1)
        expect(component.find('div.navbar')).toHaveLength(1)
    })
})