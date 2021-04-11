import users from './users'
import questions from './questions'
import { combineReducers } from 'redux'
import authedUser from './authedUser'
import { loadingBarReducer } from 'react-redux-loading'
import activePage from './activePage'

export default combineReducers({
  users,
  questions,
  authedUser,
  loadingBar: loadingBarReducer,
  activePage,
})
