import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginSelect from './LoginSelect'

class Login extends Component {
  state = {
    user: null
  }
  handleUserSelected = (e) => {
    this.setState({ user: e.target.id })
  }
  render () {
    return (
      <div>
        <h1>Sign in</h1>
        <LoginSelect
          value={this.state.user}
          users={this.props.users}
          onChange={this.handleUserSelected}
        />
      </div>
    )
  }
}


function mapPropsToState({ users }) {
  return { users }
}
export default connect(mapPropsToState)(Login)
