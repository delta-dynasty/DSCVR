import React, { useState } from 'react'
import { Form, FormGroup, Input, UncontrolledCarousel, Button } from "reactstrap";

const Home = (props) => {
  const [form, setForm] = useState({
    outside: false,
    inside: false,
    water: false,
    children: false, 
    pets: false, 
    food: false, 
    alcohol: false,
  })

  const handleChange = (event) => {
    setForm(
      {
        ...form,
        [event.target.name]: event.target.checked
      }
    )
  }

  return (
    <main className="home">
      <Form className="search">
        <FormGroup className={`select ${form.outside ? 'true':'false'}`}>
          Outside
          <Input type="checkbox" name="outside" onChange={(e) => handleChange(e)}/>
        </FormGroup>
        <FormGroup className={`select ${form.inside ? 'true':'false'}`}>
          Inside
          <Input type="checkbox" name="inside" onChange={(e) => handleChange(e)}/>
        </FormGroup>
        <FormGroup className={`select ${form.water ? 'true':'false'}`}>
          Water
          <Input type="checkbox" name="water" onChange={(e) => handleChange(e)} />
        </FormGroup>
        <FormGroup className={`select ${form.children ? 'true':'false'}`}>
          Children
          <Input type="checkbox" name="children" onChange={(e) => handleChange(e)}/>
        </FormGroup> 
        <FormGroup className={`select ${form.pets ? 'true':'false'}`}>
          Pets
          <Input type="checkbox" name="pets" onChange={(e) => handleChange(e)}/>
        </FormGroup>
        <FormGroup className={`select ${form.food ? 'true':'false'}`}>
          Food
          <Input type="checkbox" name="food" onChange={(e) => handleChange(e)}/>
        </FormGroup>
        <FormGroup className={`select ${form.alcohol ? 'true':'false'}`}>
          Alcohol
          <Input type="checkbox" name="alcohol" onChange={(e) => handleChange(e)}/>
        </FormGroup>
      </Form>
      <div className="centerbutton">
        <Button className="button" color="primary" onClick={(e) => props.handleSubmit(e, form)}>Submit</Button></div>
      <div className="dscvrtext">
      {/* <h3>DSCVR activity, fun, adventure, friendship, delicious, something new.  </h3> */}
      </div>
      <div>
        <UncontrolledCarousel 
          items={[
            {
              altText: 'image description',
              caption: '',
              key: 1,
              src: '/static/malibu.jpeg'
            },
            {
              altText: 'image description',
              caption: '',
              key: 2,
              src: '/static/bridge.jpeg'
            },
            {
              altText: 'image description',
              caption: '',
              key: 3,
              src: '/static/dommedbar.jpeg'
            },
            {
              altText: 'image description',
              caption: '',
              key: 4,
              src: '/static/waterpark.webp'
            },
            {
              altText: 'image description',
              caption: '',
              key: 5,
              src: '/static/Acuario.jpeg'
            },  
            {
              altText: 'image description',
              caption: '',
              key: 6,
              src: '/static/gliders.jpeg'
            }  
          ]}
        />
        </div>
    </main>
  )
}

export default Home 
