import React from 'react'
import styles from './styles'
import ErrorIcon from 'react-icons/lib/md/error'

export default class Message extends React.Component {

  static propTypes = {
    message: React.PropTypes.node
  }

  render () {
    return (
      <div className='paginated-error' style={styles.container}>
        <div className='paginated-error-icon'>
          <ErrorIcon style={styles.icon} />
        </div>
        <div className='paginated-error-message' style={styles.message}>
          {this.props.message}
        </div>
      </div>
    )
  }

}
