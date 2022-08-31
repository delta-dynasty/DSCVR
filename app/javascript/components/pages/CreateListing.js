import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";


export default class CreateListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createListing: {
        name: " ",
        street: " ",
        city: " ",
        state: " ",
        description: " ",
        phone: " ",
        hours: " ",
        outdoors: false,
        inside: false,
        water: false,
        children: false,
        pets: false,
        food: false,
        alcohol: false,
        image: " ",
        user_id: this.props.current_user.id,
      },
      submitted: false,
    };
  }

  handleChange = (e) => {
    const { createListing } = this.state;
    createListing[e.target.name] = e.target.value;
    this.setState({ createListing: createListing });
  };

  handleSubmit = () => {
    this.props.createNewListing(this.state.createListing);
    this.setState({ submitted: true });
  };

  render() {
    console.log("create listing", this.state.createListing)
    return (
      <>
        <h1>Create Listing</h1>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.createListing.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="street">Street</Label>
            <Input
              type="text"
              name="street"
              onChange={this.handleChange}
              value={this.state.createListing.street}
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              type="text"
              name="city"
              onChange={this.handleChange}
              value={this.state.createListing.city}
            />
          </FormGroup>
          <FormGroup>
            <Label for="state">State</Label>
            <Input
              type="text"
              name="state"
              onChange={this.handleChange}
              value={this.state.createListing.state}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="text"
              name="description"
              onChange={this.handleChange}
              value={this.state.createListing.description}
            />
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone</Label>
            <Input
              type="text"
              name="phone"
              onChange={this.handleChange}
              value={this.state.createListing.phone}
            />
          </FormGroup>
          <FormGroup>
            <Label for="hours">Hours</Label>
            <Input
              type="text"
              name="hours"
              onChange={this.handleChange}
              value={this.state.createListing.hours}
            />
            <FormGroup>
              <Label for="image">Image</Label>
              <Input
                type="text"
                name="image"
                onChange={this.handleChange}
                value={this.state.createListing.image}
              />
            </FormGroup>
          </FormGroup>
          <FormGroup>
            Outdoors &nbsp;&nbsp;&nbsp;
            <Input type="checkbox" name="outdoors" value={true}/>
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
          <Button onClick={this.handleSubmit}>Submit</Button>
          {this.state.submitted && <Redirect to="/" />}
        </Form>
      </>
    );
  }
}
