import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

const QuestionsList = props => {
  const { questionsIds, users, questions, tabName } = props
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
            buttonLabel="see question"
            tabName={tabName}
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
  tabName: PropTypes.string
}
export default QuestionsList
