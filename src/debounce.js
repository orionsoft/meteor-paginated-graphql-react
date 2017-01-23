import React from 'react'
import debounce from 'lodash/debounce'
import isEqual from 'lodash/isEqual'

export default function (Child) {
  return class Debounce extends React.Component {

    static propTypes = {
      variables: React.PropTypes.object
    }

    constructor (props) {
      super(props)
      this.deboucedDidRecieveProps = debounce(this.didRecieveProps, 300)
      this.state = {props, propsIndex: 1}
    }

    didRecieveProps (props) {
      this.setState(oldState => {
        return {props, debouncing: false, propsIndex: oldState.propsIndex + 1}
      })
    }

    componentWillReceiveProps (nextProps) {
      if (isEqual(nextProps.variables, this.props.variables)) {
        this.didRecieveProps(nextProps)
      } else {
        this.setState({debouncing: true})
        this.deboucedDidRecieveProps(nextProps)
      }
    }

    /* shouldComponentUpdate (nextProps, nextState) {
      if (nextState.propsIndex !== this.state.propsIndex) return true
      if (nextState.debouncing !== this.state.debouncing) return true
      return false
    } */

    render () {
      return <Child ref='child' debouncing={this.state.debouncing} {...this.state.props} />
    }

  }
}
