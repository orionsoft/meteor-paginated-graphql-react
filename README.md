# Orionsoft

Example

```js
import React from 'react'
import styles from './styles.css'
import Paginated from 'meteor-paginated-graphql-react'
import moment from 'moment'
import numeral from 'numeral'
import autobind from 'autobind-decorator'
import {withRouter} from 'react-router'

@withRouter
export default class List extends React.Component {

  static propTypes = {
    router: React.PropTypes.object
  }

  @autobind
  onSelect ({_id, amount}) {
    this.props.router.push(`/expenses/transaction/${_id}`)
  }

  renderAmount ({amount}) {
    const style = amount > 0 ? {color: 'green'} : {color: 'red'}
    return (
      <div style={style}>
        {numeral(amount).format('$0,0')}
      </div>
    )
  }

  getFields () {
    return [
      {title: 'Nombre', name: 'name'},
      {title: 'Categoría', name: 'category'},
      {title: 'Monto', name: 'amount', render: this.renderAmount, sort: 'ASC'},
      {title: 'Fecha', name: 'date', render: ({date}) => moment(date).format('L'), defaultSort: 'DESC', sort: 'DESC'}
    ]
  }

  render () {
    return (
      <div className={styles.container}>
        <Paginated
          queryName='transactions'
          fields={this.getFields()}
          onPress={this.onSelect} />
      </div>
    )
  }

}

```
