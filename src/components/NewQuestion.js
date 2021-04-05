import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: ''
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { authedUser, dispatch } = this.props
    dispatch(handleAddQuestion({
      author: authedUser,
      ...this.state
    }))
  }
  handleInputChange = (e) => {
    this.setState({[e.target.id]: e.target.value})
  }
  render () {
    return (
      <Fragment>
        <h1 className="ui center aligned header">Create a Question</h1>
        <Form onSubmit={this.handleSubmit}>
          <h3>Would you rather... </h3>
          <Form.Field>
            <label>Option One</label>
            <input
              id='optionOneText'
              placeholder='Enter Option One'
              value={this.state.optionOne}
              onChange={this.handleInputChange}/>
          </Form.Field>
          <h3>OR... </h3>
          <Form.Field>
            <label>Option Two</label>
            <input
              id='optionTwoText'
              placeholder='Enter Option Two'
              value={this.state.optionTwo}
              onChange={this.handleInputChange}/>
          </Form.Field>
          <Button
            type='submit'
            disabled={!this.state.optionOneText || !this.state.optionTwoText}>
            Submit
          </Button>
        </Form>
      </Fragment>
    )

  }
}

NewQuestion.propTypes = {
  dispatch: PropTypes.func,
  authedUser: PropTypes.string,
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}
export default connect(mapStateToProps)(NewQuestion)
