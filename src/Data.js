import React from 'react'
import Pagination from './Pagination'
import Table from './Table'
import Loading from './Loading'
import Message from './Message'

export default class Data extends React.Component {

  static propTypes = {
    data: React.PropTypes.object,
    fields: React.PropTypes.array,
    onPress: React.PropTypes.func,
    sortBy: React.PropTypes.string,
    sortType: React.PropTypes.string,
    setSort: React.PropTypes.func.isRequired,
    debouncing: React.PropTypes.bool,
    selectedItemId: React.PropTypes.string
  }

  height = 300

  calculateHeight () {
    setTimeout(() => {
      if (this.refs.items) {
        this.height = this.refs.items.clientHeight
      }
    }, 200)
  }

  renderLoading () {
    return <Loading height={this.height} />
  }

  renderNotFound () {
    return <Message message='No items found' />
  }

  renderError () {
    let message = this.props.data.error.message
    if (this.props.data.error && this.props.data.error.graphQLErrors && this.props.data.error.graphQLErrors[0]) {
      message = this.props.data.error.graphQLErrors[0].message
    }
    return <Message message={message} />
  }

  renderTable () {
    if (this.props.debouncing) return this.renderLoading()
    if (this.props.data.loading) return this.renderLoading()
    if (!this.props.data.result.items || this.props.data.result.items.length === 0) return this.renderNotFound()
    this.calculateHeight()
    return (
      <div ref='items'>
        <Table
          sortBy={this.props.sortBy}
          sortType={this.props.sortType}
          setSort={this.props.setSort}
          onSelect={this.props.onPress}
          selectedItemId={this.props.selectedItemId}
          items={this.props.data.result.items}
          fields={this.props.fields} />
      </div>
    )
  }

  render () {
    if (!this.props.data.result) {
      if (this.props.data.loading) {
        return this.renderLoading()
      } else {
        return this.renderError()
      }
    }
    return (
      <div className='box'>
        {this.renderTable()}
        <Pagination {...this.props} result={this.props.data.result} />
      </div>
    )
  }

}
