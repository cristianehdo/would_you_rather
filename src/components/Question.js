import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Card from './Card'
import { handleAnswerQuestion } from '../actions/shared'

class Question extends Component {
  handleButtonClick = (selectedOption, id) => {
    const { dispatch, authedUser } = this.props
    dispatch(handleAnswerQuestion({
      qid: id,
      answer: selectedOption,
      authedUser
    }))
  }
  render () {
    const { question, users } = this.props
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
  users: PropTypes.object,
  question: PropTypes.object,
  dispatch: PropTypes.func,
  authedUser: PropTypes.string,
}

function mapStateToProps({ authedUser, users, questions }, {id}) {
  return {
    authedUser,
    question: questions[id],
    users
  }
}
export default withRouter(connect(mapStateToProps)(Question))
