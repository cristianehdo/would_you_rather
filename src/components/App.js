import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }
  render() {
    console.log(this.props)
    return (

      <Fragment>
        <LoadingBar />
        <div className='ui container'>
          {this.props.loading
            ? null
            : <Login />
          }
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    loading: users === null,
    users
  }
}
export default connect(mapStateToProps)(App)
