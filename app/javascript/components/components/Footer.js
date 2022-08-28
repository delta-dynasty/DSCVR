import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <span className="copyright">Copyright &copy; DSCVR 2022</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}