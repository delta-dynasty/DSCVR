import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class CreateReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        title: "",
        comment: "",
        user_id: this.props.current_user.id,
        listing_id: ""
      },
      submitted: false,
    };
  }
  
  handleChange = (e) => {
    const { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ form: form });
  };

  handleSubmit = () => {
    this.props.createReview(this.state.form);
    this.setState({ submitted: true });
  };

  render() {
    return (
      <>
        <h1>Create a Review</h1>
        <Form>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              type="text"
              name="name"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup row>
            <Label for="Comment">Comment</Label>
            <Input
              type="textarea"
              name="text"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button onClick={this.handleSubmit}>Submit</Button>
          {this.state.submitted && <Redirect to="/show" />}
        </Form>
      </>
    )
  }
}