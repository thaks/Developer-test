import React from 'react'
import Footer from './footer.component'

import {configure, shallow, mount} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter() })

describe("<Footer/> Component Unit Test", () => {

    let component;
    beforeEach(() => {
        component = shallow(<Footer />)
    })

    it("Should render Footer Component", () => {
        expect(component).toHaveLength(1)
        expect(component.find('footer.footer')).toHaveLength(1)
    })
})