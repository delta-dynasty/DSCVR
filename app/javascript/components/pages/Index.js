import React, { Component } from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Button, CardImg, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom'

class Index extends Component {
  render() {
    return (
      <>
      <div className='indexpage'>
        <h2></h2>
          <div>
            <Row sm='3'>
            {this.props.listing && this.props.listing.map(listing => {
              return (
                <Card key={listing.id}
                style={{
                width: '18rem'}}>
                <CardImg
                  alt="listing image"
                  src= {listing.image} 
                  width="70%"
                  height="50%"/>
              <CardBody>
                <CardTitle tag='h5'>
                  {listing.name}
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6">
                  {listing.description}
                  </CardSubtitle>
                  <NavLink to={`/show/${listing.id}`}>
                    <Button>More info</Button>
                  </NavLink> 
              </CardBody>
              </Card>)
            })}
            </Row>
          </div>
        </div>
      </>
    )
  }
}

export default Index