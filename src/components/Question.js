import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Card from './Card'
import { handleAnswerQuestion } from '../actions/shared'

class Question extends Component {
  handleButtonClick = (selectedOption) => {
    const { dispatch, question, authedUser } = this.props
    dispatch(handleAnswerQuestion({
      qid: question.id,
      answer: selectedOption,
      authedUser
    }))
  }
  render () {
    const { question, users } = this.props
    return (
      <div className="ui list">
        <div className="item" key={question.id} >
          <Card
            avatarSize='small'
            user={users[question.author]}
            options={{ optionOne: question.optionOne.text, optionTwo: question.optionTwo.text }}
            buttonColor='green'
            buttonLabel="submit answer"
            onButtonClick={this.handleButtonClick}
          />
        </div>
      </div>
    )
  }
}

Question.propTypes = {
  questionsIds: PropTypes.array,
  users: PropTypes.object,
  question: PropTypes.object,
  dispatch: PropTypes.func,
  authedUser: PropTypes.string,
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id]
  return {
    authedUser,
    question: question,
    users
  }
}
export default connect(mapStateToProps)(Question)
