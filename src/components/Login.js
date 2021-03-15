import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginSelect from './LoginSelect'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
  state = {
    user: null
  }
  handleUserSelected = (e) => {
    this.setState({ user: e.target.id })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(setAuthedUser(e.target.id))
    // redirect to game page
  }
  render () {
    return (
      <div>
        <h1>Sign in</h1>
        <form className='ui form' onSubmit={this.handleSubmit}>
          <div className='field'>
            <LoginSelect
              value={this.state.user}
              users={this.props.users}
              onChange={this.handleUserSelected}
            />
          </div>
          <button
            className='ui button'
            type='submit'
            disabled={this.state.user === null}>
              Sign in
          </button>
        </form>
      </div>
    )
  }
}


function mapPropsToState({ users }) {
  return { users }
}
export default connect(mapPropsToState)(Login)
