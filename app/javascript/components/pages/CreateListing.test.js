import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CreateListing from './CreateListing'
Enzyme.configure({ adapter: new Adapter() })

describe("When CreateListing renders", () => {
  let renderedCreateListing;

  beforeEach(() => {
    renderedCreateListing = shallow(<CreateListing />)
  });
  
  it("displays a heading", () => {
    const CreateListingHeading = renderedCreateListing.find("h1")
    expect(CreateListingHeading.length).toEqual(1)
  })

  it("displays a form", () => {
    const formGroup = renderedCreateListing.find("FormGroup")
    expect(formGroup.length).toEqual(15)

    const formLabel = renderedCreateListing.find("Label")
    expect(formLabel.length).toEqual(22)

    const formInput = renderedCreateListing.find("Input")
    expect(formInput.length).toEqual(22)
  })
})
