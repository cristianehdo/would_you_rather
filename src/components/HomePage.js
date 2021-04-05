import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Tab from './Tab'

class HomePage extends Component {
  render () {
    const { tabs, users, questions } = this.props
    return <Tab tabs={tabs} users={users} questions={questions} />
  }
}

function mapPropsToState({ users, authedUser, questions }) {
  const questionsIds = Object.keys(questions)
  const answeredQuestions = Object.keys(users[authedUser].answers)
  const tabs = {
    answeredQuestions: {
      title: 'Answered questions',
      questions: answeredQuestions,
    },
    unansweredQuestions: {
      title: 'Unanswered questions',
    }
  }
  tabs.unansweredQuestions.questions = questionsIds.filter((questionId) => {
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

HomePage.propTypes = {
  questions: PropTypes.object,
  tabs: PropTypes.object,
  users: PropTypes.object,
}
export default connect(mapPropsToState)(HomePage)
