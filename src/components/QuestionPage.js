import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Question from './Question'
import QuestionPoll from './QuestionPoll'

class QuestionPage extends Component {
  render() {
    const { match, user } = this.props
    const qid = match.params.id
    const answeredQuestion = !!user.answers[qid]
    return  answeredQuestion
      ? <QuestionPoll id={qid}/>
      : <Question id={qid}/>
  }
}

QuestionPage.propTypes = {
  user: PropTypes.object,
  questions: PropTypes.object,
  match: PropTypes.object,
  authedUser: PropTypes.string,
}

function mapStateToProps({ authedUser, users, questions }) {
  return {
    questions,
    user: users[authedUser],
    authedUser,
  }
}
export default withRouter(connect(mapStateToProps)(QuestionPage))
