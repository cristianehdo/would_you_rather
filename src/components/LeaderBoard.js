import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import UserCard from './UserCard'

const LeaderBoard = ({users, usersIds}) => {
  return(
    usersIds.map((id)=> {
      const user = users[id]
      return <UserCard
        name={user.name}
        avatarURL={user.avatarURL}
        answers={user.answersCount}
        questions={user.questionCount}
        key={user.id}/>
    })
  )
}

LeaderBoard.propTypes = {
  users: PropTypes.object,
  questions: PropTypes.object,
}

function mapStateToProps({ users }) {
  const usersBoard = {}
  Object.keys(users).map((id)=>{
    const user = users[id]
    user.answersCount = Object.keys(user.answers).length
    user.questionCount = user.questions?.length || 0
    usersBoard[id]= user
  })
  const usersIds = Object.keys(users).sort((a, b)=>{
    return (usersBoard[b].answersCount + usersBoard[b].questionCount) -
      (usersBoard[a].answersCount + usersBoard[a].questionCount)
  })
  return {
    users: usersBoard,
    usersIds
  }
}
export default connect(mapStateToProps)(LeaderBoard)
