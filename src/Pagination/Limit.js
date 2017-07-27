import React from 'react'
import formatNumber from '../formatNumber'
import autobind from 'autobind-decorator'

export default class Component extends React.Component {

  static propTypes = {
    limit: React.PropTypes.number,
    setLimit: React.PropTypes.func,
    result: React.PropTypes.object
  }

  @autobind
  onChange (event) {
    this.props.setLimit(Number(event.target.value))
  }

  renderSelect () {
    return (
      <select
        className='paginated-pagination-select'
        value={this.props.limit}
        onChange={this.onChange}>
        <option value={10} label='10' />
        <option value={25} label='25' />
        <option value={50} label='50' />
        <option value={100} label='100' />
        <option value={200} label='200' />
      </select>
    )
  }

  render () {
    return (
      <div>
        Show {this.renderSelect()} of {formatNumber(this.props.result.totalCount)}
      </div>
    )
  }

}
