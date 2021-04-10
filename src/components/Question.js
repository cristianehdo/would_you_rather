import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Card from './Card'
import { handleAnswerQuestion } from '../actions/shared'

class Question extends Component {
  handleButtonClick = (selectedOption, id) => {
    const { dispatch, authedUser, history } = this.props
    dispatch(handleAnswerQuestion({
      qid: id,
      answer: selectedOption,
      authedUser
    }))
    return history.push(`/questions/${id}/poll`)
  }
  render () {
    const { questions, users, match } = this.props
    const question = questions[match.params.id]
    return (
      <div key={question.id} style={{display: 'flex', justifyContent: 'center'}} >
        <Card
          avatarSize='small'
          user={users[question.author]}
          options={{ optionOne: question.optionOne.text, optionTwo: question.optionTwo.text }}
          buttonColor='green'
          buttonLabel="submit answer"
          onButtonClick={this.handleButtonClick}
          questionId={question.id}
        />
      </div>
    )
  }
}

Question.propTypes = {
  questionsIds: PropTypes.array,
  users: PropTypes.object,
  questions: PropTypes.object,
  match: PropTypes.object,
  dispatch: PropTypes.func,
  authedUser: PropTypes.string,
  history: PropTypes.object,
}

function mapStateToProps({ authedUser, users, questions }) {
  return {
    authedUser,
    questions,
    users
  }
}
export default withRouter(connect(mapStateToProps)(Question))
