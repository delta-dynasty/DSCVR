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


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      locations: [],
      reviews: [],
    }
  }

  // componentDidMount() {
  //   this.getLocations()
  //   this.getReviews()
  // }

  // getLocations() {
  //   fetch("/index")
  //   .then(res => res.json())
  //   .then(data => this.setState({ locations: data }))
  // }

  // getReviews() {
  //   fetch("/review")
  //   .then(res => res.json())
  //   .then(data => this.setState({ reviews: data }))
  // }
      
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