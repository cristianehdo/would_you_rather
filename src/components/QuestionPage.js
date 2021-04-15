import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Question from './Question'
import QuestionPoll from './QuestionPoll'
import NotFound from './NotFound'

class QuestionPage extends Component {
  render() {
    const { match, user, questions } = this.props
    const qid = match.params.id
    const question = questions[qid]
    if(!question) {
      return <NotFound />
    }
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
