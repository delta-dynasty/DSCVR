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
    return(
      <>
        <main className="home-head">
        <Nav>
          {
            <NavItem>
              <a href='/' className="nav-link">Home</a>
            </NavItem>
          }
          {
            <NavItem>
              <a href='/about' className="nav-link">About us</a>
            </NavItem>
          }
          {logged_in &&
            <NavItem>
              <a href='/create_listing' className="nav-link">Submit a new listing</a>
            </NavItem>
           }
          </Nav>
          <img className='dscvr-logo' src="/static/dscvr.png"></img>
          <Nav>
           {logged_in &&
            <NavItem>
              <a href='/update_or_delete_listing' className="nav-link">Update or Delete a previous listing</a>
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
          </main>
      </>
    )
  }
}
export default Header