import React from "react"

import { Form, Button, Header } from 'semantic-ui-react'

const LoginForm = ({handleChange, handleLogin, email, password }) => {

  return (
    <div className="login">
      <Form>
        <Header as="h3">Login</Header>
        <Form.Field>
          <label>E-mail</label>
          <input onChange={handleChange} value={email} name="email" placeholder='E-mail' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" onChange={handleChange} value={password} name="password" placeholder='Password' />
        </Form.Field>
        <Button type='submit' onClick={handleLogin}>Login</Button>
      </Form>
    </div>
  )
}

export default LoginForm
