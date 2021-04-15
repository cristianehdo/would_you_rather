import React from 'react'

const NotFound = () => {
  return(
    <div className="ui grid middle aligned segment red inverted" style={{height: '100vh', margin: 0}}>
      <div className="ui column center aligned">
        <div className="ui inverted statistic">
          <div className="value">404</div>
          <div className="label">Error</div>
          <div className="label">Not found</div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
