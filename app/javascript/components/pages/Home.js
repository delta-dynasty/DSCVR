import React, { useState } from 'react'
// import { Redirect } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

const Home = () => {
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

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(form)
      let values = {values: getKeyByValue(form, true)}
      let query = new URLSearchParams(values).toString()
        fetch (`/search?${query}`)
        .then(response => response.json())
        .then((data)=> console.log(data))
    }

  const getKeyByValue = (object, value) => {
      return Object.keys(object).filter(key => object[key] === value);
    }

    /* 
    input {outdoors: true, inside: false}

    filter method 

    send a search request to rails 
    
    
    */ 
  return (
    <>
      <div>Home</div>
      <Form>
        <FormGroup>
          Outside &nbsp;&nbsp;&nbsp;
          <Input type="checkbox" name="outside" onChange={(e) => handleChange(e)}/>
          <Label check>Yes</Label>&nbsp;&nbsp;
        </FormGroup>
        <FormGroup>
          Inside &nbsp;&nbsp;&nbsp;
          <Input type="checkbox" name="inside" onChange={(e) => handleChange(e)}/>
          <Label check>Yes</Label>&nbsp;&nbsp;
        </FormGroup>
        <FormGroup>
          Water &nbsp;&nbsp;&nbsp;
          <Input type="checkbox" name="water" onChange={(e) => handleChange(e)} />
          <Label check>Yes</Label>&nbsp;&nbsp;
        </FormGroup>
        <FormGroup>
          Children &nbsp;&nbsp;&nbsp;
          <Input type="checkbox" name="children" onChange={(e) => handleChange(e)}/>
          <Label check>Yes</Label>&nbsp;&nbsp;
        </FormGroup> 
        <FormGroup>
          Pets &nbsp;&nbsp;&nbsp;
          <Input type="checkbox" name="pets" onChange={(e) => handleChange(e)}/>
          <Label check>Yes</Label>&nbsp;&nbsp;
        </FormGroup>
        <FormGroup>
          Food &nbsp;&nbsp;&nbsp;
          <Input type="checkbox" name="food" onChange={(e) => handleChange(e)}/>
          <Label check>Yes</Label>&nbsp;&nbsp;
        </FormGroup>
        <FormGroup>
          Alcohol &nbsp;&nbsp;&nbsp;
          <Input type="checkbox" name="alcohol" onChange={(e) => handleChange(e)}/>
          <Label check>Yes</Label>&nbsp;&nbsp;
        </FormGroup>
        <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
      </Form>
      <h3>DSCVR activity, DSCVR fun, DSCVR adventure, DSCVR friendship, DSCVR delicious, DSCVR something new.  </h3>
    </>
  )
}

export default Home 