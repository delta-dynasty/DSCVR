import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import CreateListing from './pages/CreateListing'
import Home from './pages/Home'
import Index from './pages/Index'
import LoggedInHome from './pages/LoggedInHome'
import NotFound from './pages/NotFound'
import Review from './pages/Review'
import ReviewEdit from './pages/ReviewEdit'
import Show from './pages/Show'
import UpdateOrDeleteListing from './pages/UpdateOrDeleteListing'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import listings from './MockListings'

//Search Method
const filteredPlaces = () => {
  results = {
    outside: [],
    inside: [],
    water: [],
    children: [],
    pets: [],
    food: [],
    alcohol: [],
  }
//  checked boxes go to eventlistener/handler and then submit(DSCVR) button processes selection and sends it thru the if/else statements. if value = true AND value not already present (avoiding duplicates) value.push to new array.
  // Empty arrays are contained in the results object so we'll then process the object and return all the hits.

  // A variable that represents the k/v pairs
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listings: listings
      // reviews: review
    }
  }
  
  componentDidMount() {
    this.readListing()
    console.log(this.state)
  }
  // Fetch calls for listings.

  readListing = () => {
    fetch("http://localhost:3000/index")
    .then(response => response.json())
    .then(listingArr => this.setState({ listing: listingArr }))
    .catch(errors => console.log("Listing read errors:", errors))
  }

    createNewListing= (theNewListing) =>{
    fetch("http://localhost:3000/index",{
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
    fetch(`http://localhost:3000/index/${id}`,{
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
    fetch(`http://localhost:3000/index/${id}`, {
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
  //   fetch("http://localhost:3000/review")
  //   .then(response => response.json())
  //   .then(reviewArr => this.setState({ review: reviewArr }))
  //   .catch(errors => console.log("Review read errors:", errors))
  // }

  //   createNewReview= (theNewReview) =>{
  //   fetch("http://localhost:3000/review",{
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
  //   fetch(`http://localhost:3000/review/${id}`,{
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
  //   fetch(`http://localhost:3000/review/${id}`, {
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
      sign_out_route
    } = this.props
    
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)
    console.log("new_user_route:", new_user_route)
    console.log("sign_in_route:", sign_in_route)
    console.log("sign_out_route:", sign_out_route)
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
              <Route path="/create_listing" component={CreateListing} />
              <Route path="/index" component={Index} />
              <Route path="/logged_in_home" component={LoggedInHome} />
              <Route path="/not_found" component={NotFound} />
              <Route path="/review" component={Review} />
              <Route path="/review_edit" component={ReviewEdit} />
              <Route path="/show" component={Show} />
              <Route path="/update_or_delete_listing" component={UpdateOrDeleteListing} />
            </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App