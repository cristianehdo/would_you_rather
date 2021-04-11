export const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE'

export function setActivePage(name) {
  return {
    type: SET_ACTIVE_PAGE,
    name
  }
}
