import React, { Component } from 'react'
// import { Redirect } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

export default class Home extends Component {
  render() {
    return (
      <>
        <div>Home</div>
        <Form>
          <FormGroup>
            Outdoors &nbsp;&nbsp;&nbsp;
            <Input type="checkbox" />
            <Label check>Yes</Label>&nbsp;&nbsp;
            <Input type="checkbox" />
            <Label check>No</Label>
          </FormGroup>
          <FormGroup>
            Indoors &nbsp;&nbsp;&nbsp;
            <Input type="checkbox" />
            <Label check>Yes</Label>&nbsp;&nbsp;
            <Input type="checkbox" />
            <Label check>No</Label>
          </FormGroup>
          <FormGroup>
            Water &nbsp;&nbsp;&nbsp;
            <Input type="checkbox" />
            <Label check>Yes</Label>&nbsp;&nbsp;
            <Input type="checkbox" />
            <Label check>No</Label>
          </FormGroup>
          <FormGroup>
            Children &nbsp;&nbsp;&nbsp;
            <Input type="checkbox" />
            <Label check>Yes</Label>&nbsp;&nbsp;
            <Input type="checkbox" />
            <Label check>No</Label>
          </FormGroup> 
          <FormGroup>
            Pets &nbsp;&nbsp;&nbsp;
            <Input type="checkbox" />
            <Label check>Yes</Label>&nbsp;&nbsp;
            <Input type="checkbox" />
            <Label check>No</Label>
          </FormGroup>
          <FormGroup>
            Food &nbsp;&nbsp;&nbsp;
            <Input type="checkbox" />
            <Label check>Yes</Label>&nbsp;&nbsp;
            <Input type="checkbox" />
            <Label check>No</Label>
          </FormGroup>
          <FormGroup>
            Alcohol &nbsp;&nbsp;&nbsp;
            <Input type="checkbox" />
            <Label check>Yes</Label>&nbsp;&nbsp;
            <Input type="checkbox" />
            <Label check>No</Label>
          </FormGroup>
          <Button onClick={this.filteredPlaces}>DSCVR Logo</Button>
          {/* {this.state.submitted && <Redirect to="/index" />} */}
        </Form>
        <h3>DSCVR activity, DSCVR fun, DSCVR adventure, DSCVR friendship, DSCVR delicious, DSCVR something new.  </h3>
      </>
    )
  }
}