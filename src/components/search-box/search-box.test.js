import React from 'react'

import {configure, shallow, mount} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SearchBox from './search-box.component'
Enzyme.configure({adapter: new Adapter() })

describe("<SearchBox/> Component Unit Test", () => {
    const mockFn = jest.fn;

    let component;
    beforeEach(() => {
        component = shallow(<SearchBox />)
    })

    it("Should render SearchBox Component", () => {
        expect(component).toHaveLength(1)
        expect(component.find('input.search-input')).toHaveLength(1)
    })

})