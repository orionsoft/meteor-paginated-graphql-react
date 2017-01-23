import React from 'react'
import styles from './styles'
import ErrorIcon from 'react-icons/lib/md/error'

export default class Message extends React.Component {

  static propTypes = {
    message: React.PropTypes.node
  }

  render () {
    return (
      <div style={styles.container}>
        <div>
          <ErrorIcon style={styles.icon} />
        </div>
        <div style={styles.message}>
          {this.props.message}
        </div>
      </div>
    )
  }

}
