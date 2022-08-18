import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Review from './pages/Review'
Enzyme.configure({ adapter: new Adapter() })

describe("When Review renders", () => {
  it("displays a heading", () => {
    const review = shallow(<Review/>)
    const reviewHeading = review.find("h3")
    expect(reviewHeading.text()).toEqual("This Should Fail")
  })
})