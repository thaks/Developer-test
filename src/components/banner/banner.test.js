import React from 'react'
import Banner from './banner.component'

import {configure, shallow, mount} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter() })

describe("<Banner/> Component Unit Test", () => {

    let component;
    beforeEach(() => {
        component = shallow(<Banner/>)
    })

    it("Should render Banner Component", () => {
        expect(component).toHaveLength(1)
        expect(component.find('div.banner')).toHaveLength(1)
    })
})