import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './pages/Home'
Enzyme.configure({ adapter: new Adapter() })

describe("When Home renders", () => {
  it("displays a heading", () => {
    const home = shallow(<Home/>)
    const homeHeading = home.find("h3")
    expect(homeHeading.text()).toEqual("This Should Fail")
  })
})
