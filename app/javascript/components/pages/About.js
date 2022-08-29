import React, { Component } from 'react'
import { Card, CardBody, CardImg, CardTitle, CardText, CardLink, CardSubtitle } from "reactstrap";
import james from '/Users/learnacademy/Desktop/DSCVR/static/james.jpg'
import luis from '/Users/learnacademy/Desktop/DSCVR/static/luis.jpeg'
import sean from '/Users/learnacademy/Desktop/DSCVR/static/sean.jpeg'
import samuel from '/Users/learnacademy/Desktop/DSCVR/static/samuel.jpeg'
export default class About extends Component {
  render() {
  return (
    <>
      <div className="card-group" style={{
        backgroundColor: '#EEEDE7',
        paddingTop: '25px',
        paddingBottom: '50px'
      }}>
        &nbsp; &nbsp;
        <Card className="card-border">
          <CardImg className="card-image"
            alt="Picture of James"
            src={james}
            top
            height="320px"
          ></CardImg>
          <CardBody>
            <CardTitle>James Caddick</CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Product Manager
            </CardSubtitle>
            <CardText>
              "This project has been challenging and captivating in equal measures. I learnt a great deal about dynamic search functionalities in React and garnered a greater understanding of the Rails backend too."
            </CardText>
            <CardLink href="https://github.com/JICaddick" target="_blank">
              GitHub
            </CardLink>
            <CardLink href="https://www.linkedin.com/in/james-caddick/" target="_blank">
              LinkedIn
            </CardLink>
          </CardBody>
        </Card>
        &nbsp; &nbsp;
        <Card>
          <CardImg className="card-image"
            alt="..."
            src={samuel}
            top
            height="320px"
          ></CardImg>
          <CardBody>
            <CardTitle>Samuel Gordon</CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Project Manager
            </CardSubtitle>
            <CardText>
              "From week one to finish, this capstone project proved to be quite an experience and challenge. In the end, I feel like I know enough to know things are broken and where to start when it comes to fixing them. Im proud of what I've learned and accomplished during the project."
            </CardText>
            <CardLink href="https://github.com/segjr" target="_blank">
              GitHub
            </CardLink>
            <CardLink href="https://www.linkedin.com/in/samuel-gordon-jr/" target="_blank">
              LinkedIn
            </CardLink>
          </CardBody>
        </Card>
        &nbsp; &nbsp; 
        <Card>
          <CardImg className="card-image"
            alt="Picture of Luis"
            src={luis}
            top
            height="320px"
          ></CardImg>
          <CardBody>
            <CardTitle>Luis Ramos</CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Tech Lead
            </CardSubtitle>
            <CardText>
              “I believe this Capstone was the perfect way to test our knowledge and abilities that we’ve learned through the boot camp. Creating this app from scratch was so much fun as much as it was hard.”
            </CardText>
            <CardLink href="https://github.com/ninerboy81" target="_blank">
              GitHub
            </CardLink>
            <CardLink href="http://linkedin.com/in/luis-ramos1" target="_blank">
              LinkedIn
            </CardLink>
          </CardBody>
        </Card>
        &nbsp; &nbsp;
        <Card>
          <CardImg className="card-image"
            alt="Picture of Sean"
            src={sean}
            top
            height="320px"
          ></CardImg>
          <CardBody>
            <CardTitle>Sean Wallace</CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Design Lead
            </CardSubtitle>
            <CardText>
              "Working with a team to create an app from the beginning is a challenging but worthy learning experience. It puts you in a developer mindset, and gives you the opportunity to create. This has been fun and a great opportunity."
            </CardText>
            <CardLink href="https://github.com/k0smo" target="_blank">
              GitHub
            </CardLink>
            <CardLink href="https://www.linkedin.com/in/sean-wallace-62b57a164/" target="_blank">
              LinkedIn
            </CardLink>
          </CardBody>
        </Card>
        &nbsp; &nbsp;
      </div>
    </>
  );
  }
}