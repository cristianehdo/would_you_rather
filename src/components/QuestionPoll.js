import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Card as SemanticCard, Divider, Grid, Image, Segment, Progress } from 'semantic-ui-react'

class QuestionPoll extends Component {
  render () {
    const { users, questions, match, authedUser } = this.props
    const question = questions[match.params.id]
    const author = users[question.author]
    const optionOneCount = question.optionOne.votes.length
    const optionTwoCount = question.optionTwo.votes.length
    const total = optionOneCount + optionTwoCount
    const optionOneVote = question.optionOne.votes.includes(authedUser)
    const optionTwoVote = question.optionTwo.votes.includes(authedUser)
    return (
      <SemanticCard style={{width:'100%'}}>
        <SemanticCard.Content header={`Asked by ${author.name}`} />
        <SemanticCard.Description>
          <Segment>
            <Grid columns={2} relaxed='very'>
              <Grid.Column>
                <Image
                  centered
                  size='medium'
                  src={author.avatarURL}
                />
              </Grid.Column>
              <Grid.Column>
                Results:
                <Segment>
                  <div style={{fontWeight: 800}}>
                    {question.optionOne.text}:
                  </div>
                  {optionOneVote
                    ?<div className="ui teal right ribbon label">Your Answer</div>
                    : null
                  }
                  <Progress
                    value={optionOneCount}
                    total={total}
                    progress='ratio'
                    style={{marginTop:'10px'}}/>
                </Segment>
                <Segment>
                  <div style={{fontWeight: 800}}>
                    {question.optionTwo.text}:
                  </div>
                  {optionTwoVote
                    ?<div className="ui teal right ribbon label">Your Answer</div>
                    : null
                  }
                  <Progress
                    value={optionTwoCount}
                    total={total}
                    progress='ratio'
                    style={{marginTop:'10px'}}/>
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
