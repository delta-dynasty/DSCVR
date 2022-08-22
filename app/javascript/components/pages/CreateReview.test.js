import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CreateReview from './CreateReview'
Enzyme.configure({ adapter: new Adapter() })

describe("When CreateReview renders", () => {
  let renderedCreateReview;

  beforeEach(() => {
    renderedCreateReview = shallow(<CreateReview />)
  });
  
  it("displays a heading", () => {
    const CreateReviewHeading = renderedCreateReview.find("h1")
    expect(CreateReviewHeading.length).toEqual(1)
  })

  it("displays a form", () => {
    const formGroup = renderedCreateReview.find("FormGroup")
    expect(formGroup.length).toEqual(2)

    const formLabel = renderedCreateReview.find("Label")
    expect(formLabel.length).toEqual(2)

    const formInput = renderedCreateReview.find("Input")
    expect(formInput.length).toEqual(2)

    const formButton = renderedCreateReview.find("Button")
    expect(formButton.length).toEqual(1)
  })
})