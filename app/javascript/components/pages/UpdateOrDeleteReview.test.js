import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ReviewEdit from './pages/ReviewEdit'
Enzyme.configure({ adapter: new Adapter() })

describe("When ReviewEdit renders", () => {
  it("displays a heading", () => {
    const reviewEdit = shallow(<ReviewEdit/>)
    const reviewEditHeading = reviewEdit.find("h3")
    expect(reviewEditHeading.text()).toEqual("This Should Fail")
  })
})