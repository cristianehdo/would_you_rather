import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeAuthedUser } from '../actions/authedUser'
import { Menu, Segment } from 'semantic-ui-react'

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
      return <div />
    }
    const { activeItem } = this.state

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
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    )
  }
}
// const Nav = (props) => {
//   if(!props.authedUser) {
//     return <div />
//   }
//   return (
//     <nav className='nav'>
//       <ul>
//         <li>
//           <NavLink to='/home' exact activeClassName='active'>
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to='/questions/new' activeClassName='active'>
//             New Question
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to='/questions/new'
//             activeClassName='active'
//             onClick={() => props.dispatch(removeAuthedUser())}>
//              Log out
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   )
// }

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}
export default connect(mapStateToProps)(Nav)
