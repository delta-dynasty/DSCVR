import React, { useState } from 'react'
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

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
        <Button className="button" color="primary" onClick={(e) => props.handleSubmit(e, form)}>Submit</Button>
      </Form>
      <h3>DSCVR activity, DSCVR fun, DSCVR adventure, DSCVR friendship, DSCVR delicious, DSCVR something new.  </h3>
    </main>
  )
}

export default Home 
