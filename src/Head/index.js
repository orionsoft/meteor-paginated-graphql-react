import React from 'react'
import Filter from './Filter'

export default class Head extends React.Component {

  static propTypes = {
    bottomComponent: React.PropTypes.func,
    rightComponent: React.PropTypes.func,
    leftComponent: React.PropTypes.func,
    title: React.PropTypes.any,
    centerComponent: React.PropTypes.func.isRequired,
    variables: React.PropTypes.object,
    setVariable: React.PropTypes.func.isRequired
  }

  render () {
    return (
      <div className='paginated-head'>
        <div className='paginated-head-container'>
          <div className='paginated-head-left'>
            {
              this.props.leftComponent
                ? <this.props.leftComponent variables={this.props.variables} setVariable={this.props.setVariable} />
                : <div className='paginated-head-title'>{this.props.title}</div>
            }
          </div>
          <div className='paginated-head-center'>
            <this.props.centerComponent variables={this.props.variables} setVariable={this.props.setVariable} />
          </div>
          <div className='paginated-head-right'>
            {
              this.props.rightComponent
                ? <this.props.rightComponent variables={this.props.variables} setVariable={this.props.setVariable} />
                : <Filter variables={this.props.variables} setVariable={this.props.setVariable} />
            }
          </div>
        </div>
        <this.props.bottomComponent variables={this.props.variables} setVariable={this.props.setVariable} />
      </div>
    )
  }

}
