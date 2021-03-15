import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const LoginSelect = (props) => {
  const { users } = props
  const options = Object.keys(users).map((userId) => {
    const user = users[userId]
    return {
      key: userId,
      value: userId,
      text: user.name,
      image: { avatar: true, src: user.avatarURL }
    }
  })

  return (
    <Dropdown
      placeholder='Select a User'
      fluid
      selection
      options={options}
    />
  )
}

export default LoginSelect
