import React from 'react'

export default class Text extends React.Component {

  static propTypes = {
    onChange: React.PropTypes.func,
    value: React.PropTypes.any,
    fieldType: React.PropTypes.string,
    passProps: React.PropTypes.object,
    placeholder: React.PropTypes.node,
    errorMessage: React.PropTypes.node
  }

  static defaultProps = {
    fieldType: 'text'
  }

  render () {
    return (
      <div className='paginated-text-field'>
        <input
          className='paginated-text-field-input'
          type={this.props.fieldType}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={event => this.props.onChange(event.target.value)}
          {...this.props.passProps} />
        <div className='paginated-text-field-error'>{this.props.errorMessage}</div>
      </div>
    )
  }

}
