import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { Button, Card as SemanticCard, Image } from 'semantic-ui-react'
import QuestionOptions from './QuestionOptions'

class Card extends Component {
  state = {
    answer: 'optionOne',
    questionPage: this.props.tabName === 'unansweredQuestions'
  }
  handleButtonClick = () => {
    if (this.state.questionPage) {
      <Redirect to={`/questions/{this.props.questionId}`} />
    } else {
      console.log("nops")
      // todo
      // redirect to question page
    }
  }
  handleAnswerChanged = (answer) => {
    this.setState(answer)
  }
  render() {
    const { avatarSize, user, options, buttonColor  } = this.props
    return (
      <SemanticCard>
        <SemanticCard.Content>
          <Image
            floated='left'
            size={avatarSize}
            src={user.avatarURL}
          />
          <SemanticCard.Header>{user.name}</SemanticCard.Header>
          <SemanticCard.Description>
            <strong>Would you rather...</strong>
            <QuestionOptions
              options={options}
              onChange={this.handleAnswerChanged}
              value={this.state.answer}
            />
          </SemanticCard.Description>
        </SemanticCard.Content>
        <SemanticCard.Content extra>
          <div className='ui bottom attached button'>
            <Button basic color={buttonColor} onClick={this.handleButtonClick}>
              View Poll
            </Button>
          </div>
        </SemanticCard.Content>
      </SemanticCard>
    )
  }
}

Card.propTypes = {
  avatarSize: PropTypes.string,
  buttonColor: PropTypes.string,
  tabName: PropTypes.string,
  questionId: PropTypes.string,
  user: PropTypes.object,
  options: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  onButtonClick: PropTypes.func,
}
export default Card
