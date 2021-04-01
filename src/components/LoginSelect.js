import React from 'react'
import PropTypes from 'prop-types'
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

LoginSelect.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  users: PropTypes.object,
}
export default LoginSelect
