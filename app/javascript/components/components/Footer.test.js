import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Footer'
Enzyme.configure({ adapter: new Adapter() })

describe("When Footer renders", () => {
  it("displays text", () => {
    const footer = shallow(<Footer />)
    const footerHeading = footer.find("h3")
    expect(footerHeading.text()).toEqual("ⒸTeam Delta Dynasty")
  })
})