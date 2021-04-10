import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Card as SemanticCard, Divider, Grid, Image, Segment } from 'semantic-ui-react'

class QuestionPoll extends Component {
  render () {
    const { users, questions, match } = this.props
    const question = questions[match.params.id]
    const author = users[question.author]
    const optionOneCount = question.optionOne.votes.length
    const optionTwoCount = question.optionTwo.votes.length
    return (
      <SemanticCard style={{width:'100%'}}>
        <SemanticCard.Content header={`Asked by ${author.name}`} />
        <SemanticCard.Description>
          <Segment>
            <Grid columns={2} relaxed='very'>
              <Grid.Column>
                <Image
                  floated='left'
                  size='small'
                  src={author.avatarURL}
                />
              </Grid.Column>
              <Grid.Column>
                Resuts:
                <Segment>
                  {question.optionOne.text}: {optionOneCount}
                  <Divider section />
                  {question.optionTwo.text}: {optionTwoCount}
                </Segment>
              </Grid.Column>
            </Grid>
            <Divider vertical />
          </Segment>
        </SemanticCard.Description>
      </SemanticCard>
    )
  }
}

QuestionPoll.propTypes = {
  users: PropTypes.object,
  questions: PropTypes.object,
  match: PropTypes.object,
  authedUser: PropTypes.string,
}
function mapStateToProps({ authedUser, users, questions }) {
  return {
    authedUser,
    questions,
    users
  }
}
export default withRouter(connect(mapStateToProps)(QuestionPoll))
