import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import LoginSelect from './LoginSelect'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
  state = {
    user: null
  }
  handleUserSelected = (_e, { value }) => {
    this.setState({ user: value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(setAuthedUser(this.state.user))
  }
  render () {
    return (
      <Fragment>
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
      </Fragment>
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
