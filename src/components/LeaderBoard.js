import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import UserCard from './UserCard'

const LeaderBoard = ({users, usersIds}) => {
  return(
    usersIds.map((id)=> {
      const user = users[id]
      console.log(user, 'user')
      return <UserCard
        name={user.name}
        avatarURL={user.avatarURL}
        answers={Object.keys(user.answers).length}
        questions={user.questions?.length}
        key={user.id}/>
    })
  )
}

LeaderBoard.propTypes = {
  users: PropTypes.object,
  questions: PropTypes.object,
}

function mapStateToProps({ users }) {
  return {
    users,
    usersIds: Object.keys(users)
  }
}
export default connect(mapStateToProps)(LeaderBoard)
