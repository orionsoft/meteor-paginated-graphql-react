import React from 'react'
import formatNumber from '../formatNumber'
import BeforeIcon from 'react-icons/lib/md/chevron-left'
import NextIcon from 'react-icons/lib/md/chevron-right'
import autobind from 'autobind-decorator'
import styles from './styles'

export default class Page extends React.Component {

  static propTypes = {
    page: React.PropTypes.number,
    setPage: React.PropTypes.func,
    result: React.PropTypes.object
  }

  state = {page: 1}

  componentWillReceiveProps (nextProps) {
    if (nextProps.page !== this.props.page) {
      this.setState({page: nextProps.page})
    }
  }

  @autobind
  onPageBlur (event) {
    this.props.setPage(Number(event.target.value))
  }

  @autobind
  onKeyPress (event) {
    const code = event.keyCode || event.which
    if (code === 13) {
      this.props.setPage(Number(event.target.value))
    }
  }

  render () {
    return (
      <div>
        <div
          style={this.props.result.hasPreviousPage ? styles.iconButton : styles.iconButtonDisabled}
          onClick={() => this.props.result.hasPreviousPage && this.props.setPage(this.props.page - 1)}>
          <BeforeIcon size={25} />
        </div>
        <div style={{ display: 'inline-block', position: 'relative', top: -7 }}>
          page <input
            name='pageInput'
            value={this.state.page}
            onChange={event => this.setState({page: event.target.value})}
            onKeyPress={this.onKeyPress}
            onBlur={this.onPageBlur}
            style={styles.pageInput} /> of {formatNumber(this.props.result.totalPages)}
        </div>
        <div
          style={this.props.result.hasNextPage ? styles.iconButton : styles.iconButtonDisabled}
          onClick={() => this.props.result.hasNextPage && this.props.setPage(this.props.page + 1)}>
          <NextIcon size={25} />
        </div>
      </div>
    )
  }

}
