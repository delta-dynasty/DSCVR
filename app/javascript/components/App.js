import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import CreateListing from './pages/CreateListing'
import Home from './pages/Home'
import Index from './pages/Index'
import LoggedInHome from './pages/LoggedInHome'
import NotFound from './pages/NotFound'
import Review from './pages/CreateReview'
import UpdateOrDeleteReview from './pages/UpdateOrDeleteReview'
import Show from './pages/Show'
import UpdateOrDeleteListing from './pages/UpdateOrDeleteListing'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import listings from './MockListings'
import { ProgressPlugin } from 'webpack'

//Search Method

// Bring state object to App.js and process state into new filter method (JS) that returns listings matching the true values. 
// Push results into new array of listings (index(search results)). 
  
  // stateobject.each do |data|
  // let results = [],
  // if data true?
  // push results

  //Pseudo
  // [arrOfBooleans].each do |value|
  // if value true?
  // p value


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listings: listings
      // reviews: review
    }
  }

  // functional props 
  filteredPlaces = (props, value) => {
    this.setState(this.home.props)
    let resultsArr = []
    if (value === true) {
      resultsArr.push(value)
    } 
    return resultsArr
  }
     
  componentDidMount() {
    this.readListing()
    console.log(this.state)
  }
  // Fetch calls for listings.

  readListing = () => {
    fetch("/index")
    .then(response => response.json())
    .then(listingArr => this.setState({ listing: listingArr }))
    .catch(errors => console.log("Listing read errors:", errors))
  }

    createNewListing= (theNewListing) =>{
    fetch("/index",{
    body: JSON.stringify(theNewListing),
    headers: {
      "Content-Type": "application/json"
    },
    method:"POST"
    })
    .then(response => response.json())
    .then(() => this.readListing())
    .catch(errors => console.log("New listing errors: ", errors))
    }
  
    updateListing = (listing, id) => {
    fetch(`/index/${id}`,{
    body: JSON.stringify(listing),
    headers: {
      "Content-Type": "application/json"
    },
    method:"PATCH"
    })
    .then(response => response.json())
    .then(()=> this.readListing())
    .catch(errors => console.log("Update listing errors: ", errors))
  }

    deleteListing = (id) => {
    fetch(`/index/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => response.json())
    .then(() => this.readListing())
    .catch(errors => console.log("Delete listing errors:", errors))
  }
  
  // Fetch calls for reviews.

  // readReview = () => {
  //   fetch("/review")
  //   .then(response => response.json())
  //   .then(reviewArr => this.setState({ review: reviewArr }))
  //   .catch(errors => console.log("Review read errors:", errors))
  // }

  //   createNewReview= (theNewReview) =>{
  //   fetch("/review",{
  //   body: JSON.stringify(theNewReview),
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   method:"POST"
  //   })
  //   .then(response => response.json())
  //   .then(() => this.readReview())
  //   .catch(errors => console.log("New review errors: ", errors))
  //   }
  
  //   updateReview = (review, id) => {
  //   fetch(`/review/${id}`,{
  //   body: JSON.stringify(listing),
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   method:"PATCH"
  //   })
  //   .then(response => response.json())
  //   .then(()=> this.readReview())
  //   .catch(errors => console.log("Update review errors: ", errors))
  // }

  //   deleteReview = (id) => {
  //   fetch(`/review/${id}`, {
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     method: "DELETE"
  //   })
  //   .then(response => response.json())
  //   .then(() => this.readReview())
  //   .catch(errors => console.log("Delete review errors:", errors))
  //   }

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;

    return(
      <>
        <Router>
          <Header {...this.props} />
          <h1>
            This is the Home page
          </h1>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/create_listing" render={() => <CreateListing createListing={this.createListing} current_user = {this.props.current_user}/>}/>
              <Route path="/index" component={Index} />
              <Route path="/logged_in_home" component={LoggedInHome} />
              <Route path="/not_found" component={NotFound} />
              <Route path="/review" render={() => <Review createReview={this.createReview} current_user = {this.props.current_user}/>}/>
              <Route path="/update_or_delete_review/:id" render={(props) => {
                let id = +props.match.params.id
                let review = this.state.reviews.find(review => review.id === id)
                return <UpdateOrDeleteReview {...props} review={review} />
              }}/>
              <Route path="/show" component={Show} />
              <Route path="/update_or_delete_listing/:id" render={(props) => {
                let id = +props.match.params.id
                let listing = this.state.reviews.find(listing => listing.id === id)
                return <UpdateOrDeleteListing {...props} listing={listing} />
              }}/>
            </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
