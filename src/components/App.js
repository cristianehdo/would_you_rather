import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Login from './Login'
import HomePage from './HomePage'
import PrivateRoute from './PrivateRoute'
import NewQuestion from './NewQuestion'
import { createBrowserHistory } from 'history'
import Nav from './Nav'
import QuestionPage from './QuestionPage'
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
                <Route path="/" exact component={this.props.authedUser ? HomePage : Login} />
                <Route path="/notfound" exact component={NotFound} />
                <PrivateRoute path="/add" exact component={NewQuestion} />
                <PrivateRoute path="/questions/:id" exact component={QuestionPage} />
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
  authedUser: PropTypes.string,
}

function mapStateToProps({ users,authedUser }) {
  return {
    loading: users === null,
    authedUser
  }
}
export default connect(mapStateToProps)(App)
