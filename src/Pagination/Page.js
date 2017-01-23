import React from 'react'
import TextField from '../Text'
import formatNumber from '../formatNumber'
import IconButton from '../IconButton'
import BeforeIcon from 'react-icons/lib/md/chevron-left'
import NextIcon from 'react-icons/lib/md/chevron-right'
import autobind from 'autobind-decorator'
import styles from './styles.css'

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
        <div style={{ display: 'inline-block' }}>
          <IconButton
            disabled={!this.props.result.hasPreviousPage}
            onTouchTap={() => this.props.result.hasPreviousPage && this.props.setPage(this.props.page - 1)}>
            <BeforeIcon />
          </IconButton>
        </div>
        <div style={{ display: 'inline-block', position: 'relative', top: -7 }}>
          page <TextField
            name='pageInput'
            style={{ width: 40 }}
            onKeyPress={this.onKeyPress}
            inputStyle={{ textAlign: 'center' }}
            value={this.state.page}
            onChange={event => this.setState({page: event.target.value})}
            onBlur={this.onPageBlur}
            className={styles.pageInput}
            underlineShow={false} /> of {formatNumber(this.props.result.totalPages)}
        </div>
        <div style={{ display: 'inline-block' }}>
          <IconButton
            disabled={!this.props.result.hasNextPage}
            onTouchTap={() => this.props.result.hasNextPage && this.props.setPage(this.props.page + 1)}>
            <NextIcon />
          </IconButton>
        </div>
      </div>
    )
  }

}
