import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import UpdateOrDeleteListing from './pages/UpdateOrDeleteListing'
Enzyme.configure({ adapter: new Adapter() })

describe("When UpdateOrDeleteListing renders", () => {
  it("displays a heading", () => {
    const updateOrDeleteListing = shallow(<UpdateOrDeleteListing/>)
    const updateOrDeleteListingHeading = updateOrDeleteListing.find("h3")
    expect(updateOrDeleteListingHeading.text()).toEqual("This Should Fail")
  })
})