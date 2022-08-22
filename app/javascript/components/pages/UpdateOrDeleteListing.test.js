import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import UpdateOrDeleteListing from './UpdateOrDeleteListing'
Enzyme.configure({ adapter: new Adapter() })

describe("When UpdateOrDeleteListing renders", () => {
  let renderedUpdateOrDeleteListing;

  beforeEach(() => {
    renderedUpdateOrDeleteListing = shallow(<UpdateOrDeleteListing />)
  });
  
  it("displays a heading", () => {
    const UpdateOrDeleteListingHeading = renderedUpdateOrDeleteListing.find("h1")
    expect(UpdateOrDeleteListingHeading.length).toEqual(1)
  })

  it("displays a form", () => {
    const formGroup = renderedUpdateOrDeleteListing.find("FormGroup")
    expect(formGroup.length).toEqual(15)

    const formLabel = renderedUpdateOrDeleteListing.find("Label")
    expect(formLabel.length).toEqual(22)

    const formInput = renderedUpdateOrDeleteListing.find("Input")
    expect(formInput.length).toEqual(22)
  })
})