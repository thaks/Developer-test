import React from 'react'
import Header from './header.component'

import {configure, shallow, mount} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter() })

describe("<Header/> Component Unit Test", () => {

    let component;
    beforeEach(() => {
        component = shallow(<Header />)
    })

    it("Should render Header Component", () => {
        expect(component).toHaveLength(1)
        expect(component.find('header.header')).toHaveLength(1)
    })
})