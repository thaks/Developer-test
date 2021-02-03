import React from 'react'
import Logo from './logo.component'

import {configure, shallow, mount} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter() })

describe("<Logo/> Component Unit Test", () => {

    let component;
    beforeEach(() => {
        component = shallow(<Logo />)
    })

    it("Should render Logo Component", () => {
        expect(component).toHaveLength(1)
        expect(component.find('div.logobox')).toHaveLength(1)
    })
})