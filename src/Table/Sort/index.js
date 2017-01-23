import React from 'react'
import UpIcon from 'react-icons/lib/md/arrow-drop-up'
import DownIcon from 'react-icons/lib/md/arrow-drop-down'
import styles from './styles'

export default class Sort extends React.Component {

  static propTypes = {
    isActiveUp: React.PropTypes.bool,
    isActiveDown: React.PropTypes.bool
  }

  render () {
    const up = this.props.isActiveUp ? {...styles.arrowUp, ...styles.active} : styles.arrowUp
    const down = this.props.isActiveDown ? {...styles.arrowDown, ...styles.active} : styles.arrowDown
    return (
      <span style={styles.container}>
        <UpIcon style={up} />
        <DownIcon style={down} />
      </span>
    )
  }

}
