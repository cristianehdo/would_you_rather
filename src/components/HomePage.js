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
  const questionsIds = Object.keys(questions).sort((a,b)=>{
    const timeA = questions[a].timestamp
    const timeB = questions[b].timestamp
    return timeB - timeA
  })
  const answeredQuestions = Object.keys(users[authedUser].answers)
  const tabs = {
    unansweredQuestions: {
      title: 'Unanswered questions',
    },
    answeredQuestions: {
      title: 'Answered questions',
      questions: answeredQuestions,
    },
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
