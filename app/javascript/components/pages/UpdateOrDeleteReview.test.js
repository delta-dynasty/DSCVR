import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import UpdateOrDeleteReview from './UpdateOrDeleteReview'
Enzyme.configure({ adapter: new Adapter() })

describe("When ReviewEdit renders", () => {
  let renderedUpdateOrDeleteReview;

  beforeEach(() => {
    renderedUpdateOrDeleteReview = shallow(<UpdateOrDeleteReview />)
  });
  
  it("displays a heading", () => {
    const UpdateOrDeleteReviewHeading = renderedUpdateOrDeleteReview.find("h1")
    expect(UpdateOrDeleteReviewHeading.length).toEqual(1)
  })

  it("displays a form", () => {
    const formGroup = renderedUpdateOrDeleteReview.find("FormGroup")
    expect(formGroup.length).toEqual(2)

    const formLabel = renderedUpdateOrDeleteReview.find("Label")
    expect(formLabel.length).toEqual(2)

    const formInput = renderedUpdateOrDeleteReview.find("Input")
    expect(formInput.length).toEqual(2)

    const formButton = renderedUpdateOrDeleteReview.find("Button")
    expect(formButton.length).toEqual(2)
  })
})