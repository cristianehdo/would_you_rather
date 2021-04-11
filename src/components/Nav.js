import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeAuthedUser } from '../actions/authedUser'
import { Menu, Segment, Image } from 'semantic-ui-react'
import { setActivePage } from '../actions/activePage'

class Nav extends Component {
  handleItemClick = (e, { name }) => {
    const { dispatch } = this.props
    if (name === 'logout') {
      dispatch(removeAuthedUser())
      dispatch(setActivePage('home'))
    } else {
      dispatch(setActivePage(name))
    }
  }

  render() {
    if(!this.props.authedUser) {
      return null
    }
    const { user, activePage } = this.props

    return (
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item
            name='home'
            active={activePage === 'home'}
            onClick={this.handleItemClick}
            as={NavLink}
            to='/'
            exact
          />
          <Menu.Item
            name='newQuestion'
            active={activePage === 'newQuestion'}
            onClick={this.handleItemClick}
            as={NavLink}
            to='/add'
            exact
          />
          <Menu.Item
            name='leaderBoard'
            active={activePage === 'leaderBoard'}
            onClick={this.handleItemClick}
            as={NavLink}
            to='/leaderboard'
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
            position='right'
            name='logout'
            active={activePage === 'logout'}
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
  activePage: PropTypes.string
}
function mapStateToProps({ authedUser, users, activePage }) {
  const user= users[authedUser]
  return {
    authedUser,
    user,
    activePage,
  }
}
export default connect(mapStateToProps)(Nav)
