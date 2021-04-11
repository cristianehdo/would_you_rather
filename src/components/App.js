import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
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
import QuestionPoll from './QuestionPoll'
import LeaderBoard from './LeaderBoard'
import NotFound from './NotFound'

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
            : <div className='ui raised very padded container segment'>
              <Nav />
              <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/login" exact component={Login} />
                <Route path="/notfound" exact component={NotFound} />
                <PrivateRoute path="/home" exact component={HomePage} />
                <PrivateRoute path="/add" exact component={NewQuestion} />
                <PrivateRoute path="/questions/:id" exact component={Question} />
                <PrivateRoute path="/questions/:id/poll" exact component={QuestionPoll} />
                <PrivateRoute path="/leaderboard" exact component={LeaderBoard} />
                <Redirect to="/notfound" />
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
