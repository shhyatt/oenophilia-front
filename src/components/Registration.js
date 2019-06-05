import React from "react"

import { Form, Button, Header } from 'semantic-ui-react'

const Registration = ({handleChange, firstname, lastname, email, password, createUser}) => {

  return (
    <div className="logout">
      <Form>
        <Header as="h3">Registration Form</Header>
        <Form.Field>
          <label>First Name</label>
          <input onChange={handleChange} name="firstname" value={firstname} placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input onChange={handleChange} name="lastname" value={lastname} placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
          <label>E-mail</label>
          <input onChange={handleChange} name="email" value={email} placeholder='E-mail' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input onChange={handleChange} type="password" name="password" value={password} placeholder='Password' />
        </Form.Field>
        <Form.Field>
          <label>Birthday</label>
          <input onChange={handleChange} type="date" name="birthday" />
        </Form.Field>
        <Button type='submit' onClick={createUser}>Register</Button>
      </Form>
    </div>
  )
}

export default Registration
