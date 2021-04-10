import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Card as SemanticCard, Image } from 'semantic-ui-react'
import QuestionOptions from './QuestionOptions'

class Card extends Component {
  state = {
    answer: 'optionOne',
  }
  handleAnswerChanged = (answer) => {
    this.setState(answer)
  }
  render() {
    const {
      avatarSize,
      user,
      options,
      buttonColor,
      onButtonClick,
      questionId,
      buttonLabel
    } = this.props
    return (
      <SemanticCard>
        <SemanticCard.Content>
          <Image
            floated='left'
            size={avatarSize}
            src={user.avatarURL}
            circular
          />
          <SemanticCard.Header>{user.name}</SemanticCard.Header>
          <SemanticCard.Meta>author</SemanticCard.Meta>
          <SemanticCard.Description>
            <p><strong>Would you rather...</strong></p>
            <QuestionOptions
              options={options}
              onChange={this.handleAnswerChanged}
              value={this.state.answer}
            />
          </SemanticCard.Description>
        </SemanticCard.Content>
        <SemanticCard.Content extra>
          <div className='ui bottom attached button'>
            <Button
              basic
              color={buttonColor}
              onClick={()=> onButtonClick(this.state.answer, questionId )}>
              {buttonLabel}
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
  buttonLabel: PropTypes.string,
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
