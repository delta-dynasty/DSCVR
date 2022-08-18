import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import LoggedInHome from './pages/LoggedInHome'
Enzyme.configure({ adapter: new Adapter() })

describe("When LoggedInHome renders", () => {
  it("displays a heading", () => {
    const loggedInHome = shallow(<LoggedInHome/>)
    const loggedInHomeHeading = loggedInHome.find("h3")
    expect(loggedInHomeHeading.text()).toEqual("This Should Fail")
  })
})