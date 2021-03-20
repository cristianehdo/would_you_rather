import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

const QuestionsList = props => {
  const { questionsIds, users, questions } = props
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
};
export default QuestionsList
