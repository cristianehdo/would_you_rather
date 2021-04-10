import { SET_AUTHED_USER, REMOVE_AUTHED_USER } from '../actions/authedUser'

const user = JSON.parse(localStorage.getItem('authedUser'))
const initialState = user ? user : null

export default function authedUser (state = initialState, action) {
  switch(action.type) {
  case SET_AUTHED_USER:
    return action.id
  case REMOVE_AUTHED_USER:
    return null
  default:
    return state
  }
}
