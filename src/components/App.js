import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Login from './Login'
import HomePage from './HomePage'
import Question from './Question'
import PrivateRoute from './PrivateRoute'
import NewQuestion from './NewQuestion'
import { createBrowserHistory } from 'history'
import Nav from './Nav'

const newHistory = createBrowserHistory()


class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router history={newHistory}>
        <Fragment>
          <LoadingBar />
          {this.props.loading
            ? null
            : <div className='ui raised very padded text container segment'>
              <Nav />
              <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/login" exact component={Login} />
                <PrivateRoute path="/home" exact component={HomePage} />
                <PrivateRoute path="/questions/new" exact component={NewQuestion} />
                <PrivateRoute path="/questions/:id" exact component={Question} />
              </Switch>
            </div>
          }
        </Fragment>
      </Router>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
  loading: PropTypes.bool,
}

function mapStateToProps({ users }) {
  return {
    loading: users === null,
    users
  }
}
export default connect(mapStateToProps)(App)
