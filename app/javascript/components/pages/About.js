import React, { Component } from 'react'
import { Card, CardBody, CardImg, CardTitle, CardText, } from "reactstrap";
export default class About extends Component {
  render() {
  return (
    <>
      <div className=" card-group">
        <Card>
          <CardImg
            alt="..."
            src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/alejandro-escamilla.jpg"
            top
          ></CardImg>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <CardText>
              <small className=" text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
                <Card>
          <CardImg
            alt="..."
            src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/alejandro-escamilla.jpg"
            top
          ></CardImg>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <CardText>
              <small className=" text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="..."
            src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/alejandro-escamilla.jpg"
            top
          ></CardImg>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
            <CardText>
              <small className=" text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="..."
            src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/alejandro-escamilla.jpg"
            top
          ></CardImg>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </CardText>
            <CardText>
              <small className=" text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
      </div>
    </>
  );
  }
}