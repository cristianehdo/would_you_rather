import React from 'react'
import { Button, Card as SemanticCard, Image } from 'semantic-ui-react'

const Card = (props) => {
  const { avatarSize, user, options, buttonColor, buttonLabel } = props
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
              {options}
          </SemanticCard.Description>
        </SemanticCard.Content>
          <SemanticCard.Content extra>
            <div className='ui bottom attached button'>
              <Button basic color={buttonColor}>
                {buttonLabel}
              </Button>
            </div>
        </SemanticCard.Content>
    </SemanticCard>
  )
}

export default Card
