import React from 'react'

import {configure, shallow, mount} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Search from './search.component'
Enzyme.configure({adapter: new Adapter() })

describe("<Search/> Component Unit Test", () => {
    const mockFn = jest.fn;

    let component;
    beforeEach(() => {
        component = shallow(<Search />)
    })

    it("Should render Search Component", () => {
        expect(component).toHaveLength(1)
        expect(component.find('div.search')).toHaveLength(1)
    })

})