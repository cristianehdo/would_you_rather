import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Card from './Card'

const QuestionsList = props => {
  const { questionsIds, users, questions, tabName, history } = props
  const handleButtonClick = (_, questionId) => {
    if (tabName === 'unansweredQuestions') {
      return history.push(`/questions/${questionId}`)
    } else {
      return history.push(`/questions/${questionId}/poll`)
    }
  }
  return (
    <div className="ui list">
      {questionsIds.map((questionId) => {
        const question = questions[questionId]
        return <div className="item" key={questionId} >
          <Card
            avatarSize='mini'
            user={users[question.author]}
            options={`${question.optionOne.text.substring(0,8)}...`}
            buttonColor='green'
            tabName={tabName}
            questionId={questionId}
            buttonLabel='View poll'
            onButtonClick={handleButtonClick}
          />
        </div>
      })}
    </div>
  )
}

QuestionsList.propTypes = {
  questionsIds: PropTypes.array,
  users: PropTypes.object,
  questions: PropTypes.object,
  history: PropTypes.object,
  tabName: PropTypes.string
}
export default  withRouter(QuestionsList)
