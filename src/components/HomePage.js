import React, { Component } from 'react'
import { connect } from 'react-redux'

class HomePage extends Component {
  render () {
    return(
      <div>
        HOME
      </div>
    )
  }
}

function mapPropsToState({ users, authedUser, questions }) {
  authedUser = 'sarahedo' // to be removed
  const questionsIds = Object.keys(questions)
  const answeredQuestions = Object.keys(users[authedUser].answers)
  return {
    users,
    authedUser,
    answeredQuestions,
    questions,
    questionsIds
  }
}
export default connect(mapPropsToState)(HomePage)
