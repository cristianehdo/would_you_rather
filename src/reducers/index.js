import users from './users'
import questions from './questions'
import { combineReducers } from 'redux'
import authedUser from './authedUser'

export default combineReducers({
  users,
  questions,
  authedUser
})
