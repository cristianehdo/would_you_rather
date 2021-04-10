import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeAuthedUser } from '../actions/authedUser'
import { Menu, Segment, Image } from 'semantic-ui-react'

class Nav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    if (name === 'logout') {
      this.props.dispatch(removeAuthedUser())
      this.setState({ activeItem: 'home' })
    } else {
      this.setState({ activeItem: name })
    }
  }

  render() {
    if(!this.props.authedUser) {
      return null
    }
    const { activeItem } = this.state
    const { user } = this.props

    return (
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            as={NavLink}
            to='/home'
            exact
          />
          <Menu.Item
            name='newQuestion'
            active={activeItem === 'newQuestion'}
            onClick={this.handleItemClick}
            as={NavLink}
            to='/questions/new'
            exact
          />
          <Menu.Item
            name='leaderBoard'
            active={activeItem === 'leaderBoard'}
            onClick={this.handleItemClick}
            as={NavLink}
            to='/leader_board'
            exact
          />
          <Menu.Item
            name={`Hello ${user.name}!`}
            active={false}
          />
          <Menu.Item>
            <Image
              circular
              size='mini'
              src={user.avatarURL}
            />
          </Menu.Item>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    )
  }
}

Nav.propTypes = {
  dispatch: PropTypes.func,
  authedUser: PropTypes.string,
  user: PropTypes.object,
}
function mapStateToProps({ authedUser, users }) {
  const user= users[authedUser]
  return {
    authedUser,
    user
  }
}
export default connect(mapStateToProps)(Nav)
