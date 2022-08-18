import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CreateListing from './CreateListing'
Enzyme.configure({ adapter: new Adapter() })

describe("When CreateListing renders", () => {
  it("displays a heading", () => {
    const createListing = shallow(<CreateListing />)
    const createListingHeading = createListing.find("h3")
    expect(createListingHeading.text()).toEqual("This Should Fail")
  })
})
