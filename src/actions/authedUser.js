export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const REMOVE_AUTHED_USER = 'REMOVE_AUTHED_USER'

export function setAuthedUser (id) {
  localStorage.setItem('authedUser', JSON.stringify(id))
  return {
    type: SET_AUTHED_USER,
    id
  }
}

export function removeAuthedUser () {
  localStorage.removeItem('authedUser')
  return {
    type: REMOVE_AUTHED_USER,
  }
}
