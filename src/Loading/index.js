import React from 'react'
import styles from './styles'

export default class Loading extends React.Component {

  static propTypes = {

  }

  render () {
    return (
      <div className='paginated-loading' style={styles.container}>
        Loading...
      </div>
    )
  }

}
