import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound'
Enzyme.configure({ adapter: new Adapter() })

describe("When NotFound renders", () => {
  let renderedNotFound;

  beforeEach(() => {
    renderedNotFound = shallow(<NotFound />)
  });
  
  it("displays a heading", () => {
    const NotFoundHeading = renderedNotFound.find("div")
    expect(NotFoundHeading.length).toEqual(1)
  })
})