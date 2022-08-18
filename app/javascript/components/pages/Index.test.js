import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Index from './Index'
Enzyme.configure({ adapter: new Adapter() })

describe("When Index renders", () => {
  it("displays a heading", () => {
    const index = shallow(<Index/>)
    const indexHeading = index.find("h3")
    expect(indexHeading.text()).toEqual("This Should Fail")
  })
})

