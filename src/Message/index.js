import React from 'react'
import ErrorIcon from 'react-icons/lib/md/error'

export default class Message extends React.Component {

  static propTypes = {
    message: React.PropTypes.node
  }

  render () {
    return (
      <div className='paginated-error'>
        <div className='paginated-error-icon'>
          <ErrorIcon />
        </div>
        <div className='paginated-error-message'>
          {this.props.message}
        </div>
      </div>
    )
  }

}
