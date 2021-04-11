import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Card from './Card'
import { setActivePage } from '../actions/activePage'

const QuestionsList = props => {
  const { questionsIds, users, questions, history } = props
  const dispatch = useDispatch()
  const handleButtonClick = (_, questionId) => {
    dispatch(setActivePage(''))
    return history.push(`/questions/${questionId}`)
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
}
export default  withRouter(QuestionsList)
