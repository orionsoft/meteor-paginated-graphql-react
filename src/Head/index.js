import React from 'react'
import styles from './styles'
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
      <div>
        <div style={styles.container}>
          <div style={styles.left}>
            {
              this.props.leftComponent
                ? <this.props.leftComponent variables={this.props.variables} setVariable={this.props.setVariable} />
              : <div className='paginated-head-title' style={styles.title}>{this.props.title}</div>
            }
          </div>
          <div style={styles.center}>
            <this.props.centerComponent variables={this.props.variables} setVariable={this.props.setVariable} />
          </div>
          <div style={styles.filter}>
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
