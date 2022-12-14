import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
  Button,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";
import { Redirect } from "react-router-dom";
import reviews from "../MockReviews";
import CreateReview from "./CreateReview";

export default class Show extends Component {
  constructor(props) {
    super(props);
    console.log(props, "props");
    this.state = {
      listingID: this.props.listing.id,
      review: false,
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ review: !this.state.review });
  };

  handleClick = () => {
    this.props.deleteListing(this.props.listing.id);
    this.setState({ isDeleted: true });
    console.log("Handle Click!");
  };

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
      review,
      listing,
    } = this.props;

    return (
      <>
        <div>Show</div>
        {listing && (
          <div>
            <Card inverse>
              <CardImg
                alt="Card image cap"
                src={listing.image}
                style={{ height: 270 }}
                width="100%"
              />
              <CardImgOverlay>
                <CardTitle>
                  {" "}
                  <h1>{listing.name}</h1>{" "}
                </CardTitle>
                <CardText> {listing.description} </CardText>
                <CardText> {listing.hours} </CardText>
              </CardImgOverlay>
            </Card>
            <br></br>
            <br></br>
            <Button onClick={() => this.props.deleteListing(listing.id)}>
              Delete
            </Button>
            {this.state.submitted && <Redirect to="/" />}
            <br></br>

            <Button onClick={this.handleClick}>Leave Review</Button>
            {this.state.review && (
              <CreateReview listing_id={listing.id} user_id={current_user.id} />
            )}
            <br></br>
            {reviews
              .filter((review) => review.listing_id === listing.id)
              .map((review) => {
                return (
                  <ListGroup>
                    <ListGroupItem>
                      <ListGroupItemHeading>
                        {review.title}
                      </ListGroupItemHeading>
                      <ListGroupItemText>{review.comment}</ListGroupItemText>
                    </ListGroupItem>
                  </ListGroup>
                );
              })}
            <br></br>
            <br></br>
          </div>
        )}
      </>
    );
  }
}
