import React from 'react'
import styles from './styles'
import Limit from './Limit'
import Page from './Page'

export default class Pagination extends React.Component {

  static propTypes = {
    result: React.PropTypes.object,
    page: React.PropTypes.number,
    limit: React.PropTypes.number,
    setPage: React.PropTypes.func.isRequired,
    setLimit: React.PropTypes.func.isRequired
  }

  render () {
    return (
      <div style={styles.container}>
        <div style={styles.limitContainer}>
          <Limit {...this.props} />
        </div>
        <div style={styles.pagesContainer}>
          <Page {...this.props} />
        </div>
      </div>
    )
  }

}
