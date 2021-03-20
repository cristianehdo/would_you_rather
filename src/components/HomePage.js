import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tab from './Tab'

class HomePage extends Component {
  render () {
    const { tabs, users, questions } = this.props
    return(
      <div>
        <Tab tabs={tabs} users={users} questions={questions} />
      </div>
    )
  }
}

function mapPropsToState({ users, authedUser, questions }) {
  authedUser = 'sarahedo' // to be removed
  const questionsIds = Object.keys(questions)
  const answeredQuestions = Object.keys(users[authedUser].answers)
  const tabs = {
    answeredQuestions: {
      title: 'Answered questions',
      questions: answeredQuestions,
    },
    unasweredQuestions: {
      title: 'Unswered questions',
    }
  }
  tabs.unasweredQuestions.questions = questionsIds.filter((questionId) => {
    return !answeredQuestions.includes(questionId)
  })
  return {
    users,
    authedUser,
    questions,
    questionsIds,
    tabs,
  }
}
export default connect(mapPropsToState)(HomePage)
