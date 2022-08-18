import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';

class Header extends Component {
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
    return(
      <>
        <h1>Feel free to DSCVR</h1>
        <Nav>
          {
            <NavItem>
              <a href='/' className="nav-link">Home</a>
            </NavItem>
          }
          {
            <NavItem>
              <a  href='/index' className="nav-link">See all Locations</a>
            </NavItem>
          }
          {
            <NavItem>
              <a href='/about' className="nav-link">About us</a>
            </NavItem>
          }
          {
            <NavItem>
              <a href='/review' className="nav-link">Check out some reviews</a>
            </NavItem>
          }
          {logged_in &&
            <NavItem>
              <a href='/create_listing' className="nav-link">Submit a new listing</a>
            </NavItem>
          }
           {logged_in &&
            <NavItem>
              <a href='/updateordeletelisting' className="nav-link">Update or Delete a previous listing</a>
            </NavItem>
          }
          {logged_in &&
            <NavItem>
              <a href={sign_out_route} className="nav-link">Sign Out</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={sign_in_route} className="nav-link">Sign In</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={new_user_route} className="nav-link">Sign Up</a>
            </NavItem>
          }
        </Nav>
      </>
    )
  }
}
export default Header