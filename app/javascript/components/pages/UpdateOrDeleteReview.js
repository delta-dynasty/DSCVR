import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class UpdateOrDeleteReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateReview: {
        title: " ",
        comment: " ",
      },
      submitted: false,
      isDeleted: false,
    };
  }

  handleChange = (e) => {
    const { updateReview } = this.state;
    updateReview[e.target.name] = e.target.value;
    this.setState({ updateReview: updateReview });
  };

  handleSubmit = () => {
    this.props.updateReview(this.state.updateReview);
    this.setState({ submitted: true });
  };

  handleClick = () => {
    this.props.deleteReview(this.props.review.id)
    this.setState({ isDeleted: true })
    console.log("Handle Click!")
  }



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
              value={this.state.updateReview.title}
            />
          </FormGroup>
          <FormGroup row>
            <Label for="Comment">Comment</Label>
            <Input
              type="textarea"
              name="text"
              onChange={this.handleChange}
              value={this.state.updateReview.comment}
            />
          </FormGroup>
          <Button onClick={this.handleSubmit}>Update</Button>
          {this.state.submitted && <Redirect to="/show" />} &nbsp;&nbsp;
          <Button onClick={() => this.props.deleteReview(review.id)}>Delete</Button>
          {this.state.submitted && <Redirect to="/show" />}
        </Form>
      </>
    )
  }
}