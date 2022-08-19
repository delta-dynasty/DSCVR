import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class UpdateOrDeleteReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createReview: {
        title: " ",
        comment: " ",
      },
      submitted: false,
    };
  }

  handleChange = (e) => {
    const { createReview } = this.state;
    createReview[e.target.name] = e.target.value;
    this.setState({ createReview: createReview });
  };

  handleSubmit = () => {
    this.props.createListing(this.state.createReview);
    this.setState({ submitted: true });
  };
  render() {
    return (
      <>
        <h1>Update or Delete your Review</h1>
        <Form>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.createReview.title}
            />
          </FormGroup>
          <FormGroup row>
            <Label for="Comment">Comment</Label>
            <Input
              type="textarea"
              name="text"
              onChange={this.handleChange}
              value={this.state.createReview.comment}
            />
          </FormGroup>
          <Button onClick={this.handleSubmit}>Update</Button>
          {this.state.submitted && <Redirect to="/show" />} &nbsp;&nbsp;
          <Button onClick={this.handleSubmit}>Delete</Button>
          {this.state.submitted && <Redirect to="/show" />}
        </Form>
      </>
    )
  }
}