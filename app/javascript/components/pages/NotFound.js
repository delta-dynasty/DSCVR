import React, { Component } from 'react'
import { Card, CardImg } from "reactstrap";
import notfound from '/Users/learnacademy/Desktop/DSCVR/static/notfound.jpeg'
export default class NotFound extends Component {
  render() {
    return (
      <Card>
          <CardImg
            alt="Not Found Picture"
            src={notfound}
            top
            height="800px"
          ></CardImg>
      </Card>
   )
  }
}



