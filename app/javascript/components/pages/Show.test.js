import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Show from './pages/Show'
Enzyme.configure({ adapter: new Adapter() })

describe("When Show renders", () => {
  it("displays a heading", () => {
    const show = shallow(<Show/>)
    const showHeading = show.find("h3")
    expect(showHeading.text()).toEqual("This Should Fail")
  })
})