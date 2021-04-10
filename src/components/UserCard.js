import React from 'react'
import PropTypes from 'prop-types'
import { Card as SemanticCard, Grid, Image } from 'semantic-ui-react'

const UserCard = ({ name, avatarURL, answers, questions }) => {
  return (
    <SemanticCard style={{width:'100%'}}>
      <SemanticCard.Content>
        <Grid  columns={3} divided>
          <Grid.Column width={5}>
            <Image
              centered
              circular
              size='small'
              src={avatarURL}
            />
          </Grid.Column>
          <Grid.Column width={7}>
            <h2>{name}</h2>
            <p>Asnwered Questions: {answers}</p>
            <p>Created Questions: {questions}</p>
          </Grid.Column>
          <Grid.Column width={4}>
            <SemanticCard>
              <SemanticCard.Content header='Score:' />
              <SemanticCard.Content>
                {(answers + questions) || 0}
              </SemanticCard.Content>
            </SemanticCard>
          </Grid.Column>
        </Grid>
      </SemanticCard.Content>
    </SemanticCard>
  )
}

UserCard.propTypes = {
  name: PropTypes.string,
  avatarURL: PropTypes.string,
  answers: PropTypes.number,
  questions: PropTypes.number,
}
export default UserCard
