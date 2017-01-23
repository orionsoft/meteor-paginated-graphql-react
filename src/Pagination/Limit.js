import React from 'react'
import formatNumber from '../formatNumber'
import styles from './styles'
import autobind from 'autobind-decorator'

/* <SelectField
  underlineStyle={{display: 'none'}}
  value={this.props.limit}
  onChange={(_, __, limit) => this.props.setLimit(limit)}
  style={{
  width: 50,
  marginLeft: 5,
  position: 'relative',
  top: 4
  }}>
  <MenuItem value={10} primaryText='10' />
  <MenuItem value={25} primaryText='25' />
  <MenuItem value={50} primaryText='50' />
  <MenuItem value={100} primaryText='100' />
  <MenuItem value={200} primaryText='200' />
</SelectField> */

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
        style={styles.select}
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
