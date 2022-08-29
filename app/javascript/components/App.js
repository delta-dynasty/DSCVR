import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import CreateListing from "./pages/CreateListing";
import Home from "./pages/Home";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CreateReview from "./pages/CreateReview";
import UpdateOrDeleteReview from "./pages/UpdateOrDeleteReview";
import Show from "./pages/Show";
import UpdateOrDeleteListing from "./pages/UpdateOrDeleteListing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import reviews from "./MockReviews";
import listings from "./MockListings";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: listings,
      reviews: reviews,
      search: false,
    };
  }

  readListing = () => {
    fetch("/listings")
      .then((response) => response.json())
      .then((listingArr) => this.setState({ listings: listingArr }))
      .catch((errors) => console.log("Listing read errors:", errors));
  };

  createNewListing = (theNewListing) => {
    console.log("app.js create listing" , theNewListing)
    fetch("/listings", {
      body: JSON.stringify(theNewListing),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then(() => this.readListing())
      .catch((errors) => console.log("New listing errors: ", errors));
  };

  updateListing = (listing, id) => {
    fetch(`/listings/${id}`, {
      body: JSON.stringify(listing),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then(() => this.readListing())
      .catch((errors) => console.log("Update listing errors: ", errors));
  };

  deleteListing = (id) => {
    fetch(`/listings/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => this.readListing())
      .catch((errors) => console.log("Delete listing errors:", errors));
  };

  readReview = () => {
    fetch("/reviews")
      .then((response) => response.json())
      .then((reviewArr) => this.setState({ review: reviewArr }))
      .catch((errors) => console.log("Review read errors:", errors));
  };

  createNewReview = (theNewReview, listingID) => {
    fetch(`/reviews`, {
      body: JSON.stringify(theNewReview),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then(() => this.readReview())
      .catch((errors) => console.log("New review errors: ", errors));
  };

  updateReview = (review, id) => {
    fetch(`/reviews/${id}`, {
      body: JSON.stringify(review),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then(() => this.readReview())
      .catch((errors) => console.log("Update review errors: ", errors));
  };

  deleteReview = (id) => {
    fetch(`/reviews/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => this.readReview())
      .catch((errors) => console.log("Delete review errors:", errors));
  };

  handleSubmit = (event, form) => {
    event.preventDefault();
    let values = { values: this.getKeyByValue(form, true) };
    let query = new URLSearchParams(values).toString();
    fetch(`/search?${query}`)
      .then((response) => response.json())
      .then((data) => this.setState({ listings: data, search: true }));
  };

  getKeyByValue = (object, value) => {
    return Object.keys(object).filter((key) => object[key] === value);
  };

  resetSearch = () => {
    this.setState({ search: false });
  };

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;

    return (
      <>
        <Router>
          <Header {...this.props} />
          {this.state.listings.length > 0 && this.state.search && (
            <Index
              listings={this.state.listings}
              resetSearch={this.resetSearch}
            />
          )}
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home handleSubmit={this.handleSubmit} />}
            />
            <Route path="/about" component={About} />
            <Route
              path="/create_listing"
              render={() => (
                <CreateListing
                  createNewListing={this.createNewListing}
                  current_user={current_user}
                />
              )}
            />
            <Route
              path="/create_review"
              render={() => (
                <CreateReview
                  createReview={this.createReview}
                  current_user={current_user}
                />
              )}
            />
            <Route
              path="/update_or_delete_review/:id"
              render={(props) => {
                let id = +props.match.params.id;
                let review = this.state.reviews.find(
                  (review) => review.id === id
                );
                return <UpdateOrDeleteReview {...props} review={review} />;
              }}
            />
            <Route
              path="/listing/:id"
              render={(props) => {
                let id = +props.match.params.id;
                let listing = this.state.listings.find(
                  (listing) => listing.id === id
                );
                return (
                  <Show
                    {...props}
                    listing={listing}
                    deleteListing={this.deleteListing}
                  />
                );
              }}
            />
            <Route
              path="/update_or_delete_listing/:id"
              render={(props) => {
                let id = +props.match.params.id;
                let listing = this.state.reviews.find(
                  (listing) => listing.id === id
                );
                return <UpdateOrDeleteListing {...props} listing={listing} />;
              }}
            />
            <Route path="/not_found" component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
