import React from 'react'
import {Form, Field} from 'simple-react-form'
import Text from '../Text'

export default class Filter extends React.Component {

  static propTypes = {
    variables: React.PropTypes.object,
    setVariable: React.PropTypes.func
  }

  render () {
    return (
      <div>
        <Form
          state={this.props.variables}
          onChange={({filter}) => this.props.setVariable('filter', filter)}>
          <Field
            fieldName='filter'
            type={Text}
            placeholder='Search' />
        </Form>
      </div>
    )
  }

}
