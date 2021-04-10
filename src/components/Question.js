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
    const { questions, users, match } = this.props
    const question = questions[match.params.id]
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
  questions: PropTypes.object,
  match: PropTypes.object,
  dispatch: PropTypes.func,
  authedUser: PropTypes.string,
}

function mapStateToProps({ authedUser, users, questions }) {
  return {
    authedUser,
    questions,
    users
  }
}
export default withRouter(connect(mapStateToProps)(Question))
