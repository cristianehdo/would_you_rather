export const RECEIVE_USERS = 'RECEIVE_USERS'
export const USER_ANSWERED_QUESTION = 'USER_ANSWERED_QUESTION'
export const USER_ADDED_QUESTION = 'USER_ADDED_QUESTION'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function userAnsweredQuestion({qid, authedUser, answer}) {
  return {
    type: USER_ANSWERED_QUESTION,
    qid,
    authedUser,
    answer
  }
}

export function userAddedQuestion({id, author}) {
  return {
    type: USER_ADDED_QUESTION,
    qid: id,
    authedUser: author
  }
}
