import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
    this.props.dispatch(setAuthedUser(this.state.user))
    return this.props.history.push('/home')
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


Login.propTypes = {
  users: PropTypes.object,
  dispatch: PropTypes.func,
  history: PropTypes.object
}
function mapPropsToState({ users }) {
  return { users }
}
export default connect(mapPropsToState)(Login)
