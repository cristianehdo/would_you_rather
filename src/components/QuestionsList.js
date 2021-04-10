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
      console.log('nops')
      // todo
      // dispatch answer
      // redirect to view poll
    }
  }
  return (
    <div className="ui list">
      {questionsIds.map((questionId) => {
        const question = questions[questionId]
        return <div className="item" key={questionId} >
          <Card
            avatarSize='tiny'
            user={users[question.author]}
            options='be a...'
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
