import React from 'react'
import Shimmer from "./shimmer.component";

import {configure, shallow, mount} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({adapter: new Adapter() })

describe("<Shimmer/> Component Unit Test", () => {
    const mockFn = jest.fn;

    let component;
    beforeEach(() => {
        component = shallow(<Shimmer />)
    })

    it("Should render Shimmer Component", () => {
        expect(component).toHaveLength(1)
        expect(component.find('div.shimmer')).toHaveLength(1)
    })

})