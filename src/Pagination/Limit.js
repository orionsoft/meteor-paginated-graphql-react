import React from 'react'
import formatNumber from '../formatNumber'

export default class Component extends React.Component {

  static propTypes = {
    limit: React.PropTypes.number,
    setLimit: React.PropTypes.func,
    result: React.PropTypes.object
  }

  render () {
    return (
      <div>
        Show {/* <SelectField
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
        </SelectField> */} of {formatNumber(this.props.result.totalCount)}
      </div>
    )
  }

}
