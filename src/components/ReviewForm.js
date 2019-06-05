import React from "react"

import { Form } from 'semantic-ui-react'

export default class ReviewForm extends React.Component {

  state = {
    value: null,
    review: ''
  }

  handleChange = (e, { value }) => {
    this.setState({
      value: value
    })
  }

  handleTextArea = (e, { value }) => {
    this.setState({
      review: value
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    this.props.updateReview(this.props.review,this.state.value,this.state.review)
  }

  render() {
    return (
      <div className="reviewForm">
        <Form>
          <h4>Rating</h4>
          <Form.Group>
          <Form.Radio
          value='1'
          checked={parseInt(this.state.value) === 1}
          onChange={this.handleChange}
          />
          <Form.Radio
          value='2'
          checked={parseInt(this.state.value) === 2}
          onChange={this.handleChange}
          />
          <Form.Radio
          value='3'
          checked={parseInt(this.state.value) === 3}
          onChange={this.handleChange}
          />
          <Form.Radio
          value='4'
          checked={parseInt(this.state.value) === 4}
          onChange={this.handleChange}
          />
          <Form.Radio
          value='5'
          checked={parseInt(this.state.value) === 5}
          onChange={this.handleChange}
          />
          </Form.Group>
          <Form.TextArea onChange={this.handleTextArea} label='Review (Optional)' placeholder='Tell us more about the pairing...' />
          <Form.Button onClick={this.handleClick}>Submit Review</Form.Button>
        </Form>
      </div>
    )
  }
}
