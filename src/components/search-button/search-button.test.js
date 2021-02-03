import React from 'react'

import {configure, shallow, mount} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SearchButton from './search-button.component'
Enzyme.configure({adapter: new Adapter() })

describe("<SearchButton/> Component Unit Test", () => {
    const mockFn = jest.fn;

    let component;
    beforeEach(() => {
        component = shallow(<SearchButton />)
    })

    it("Should render SearchButton Component", () => {
        expect(component).toHaveLength(1)
        expect(component.find('div.search-button')).toHaveLength(1)
    })

})