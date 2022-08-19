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


class App extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    
    
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
              <Route path="update_or_delete_review/:id" render={(props) => {
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
    )
  }
}

export default App