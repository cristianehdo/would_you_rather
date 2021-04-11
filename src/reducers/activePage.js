import { SET_ACTIVE_PAGE } from '../actions/activePage'

export default function setActivePage(state = 'home', action) {
  switch(action.type) {
  case SET_ACTIVE_PAGE:
    return action.name
  default:
    return state
  }

}
