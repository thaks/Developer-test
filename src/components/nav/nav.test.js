import React from 'react'
import Nav from './nav.component'

import {configure, shallow, mount} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter() })

describe("<Nav/> Component Unit Test", () => {

    let component;
    beforeEach(() => {
        component = shallow(<Nav />)
    })

    it("Should render Nav Component", () => {
        expect(component).toHaveLength(1)
        expect(component.find('nav.nav')).toHaveLength(1)
    })
})