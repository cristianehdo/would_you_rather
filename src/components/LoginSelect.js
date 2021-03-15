import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const LoginSelect = (props) => {
  const { users, onChange, value } = props
  const options = Object.keys(users).map((userId) => {
    const user = users[userId]
    return {
      key: userId,
      value: userId,
      text: user.name,
      id: userId,
      image: { avatar: true, src: user.avatarURL }
    }
  })

  return (
    <Dropdown
      placeholder='Select a User'
      fluid
      selection
      options={options}
      onChange={onChange}
      value={value}
    />
  )
}

export default LoginSelect
