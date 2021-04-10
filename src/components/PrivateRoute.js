import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

function PrivateRoute({ isSignedIn, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isSignedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  isSignedIn: PropTypes.bool,
  location: PropTypes.object,
}

const mapStateToProps = ({ authedUser }) => {
  return { isSignedIn: !!authedUser }
}

export default connect(mapStateToProps, {})(PrivateRoute)
