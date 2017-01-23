import React from 'react'
import dot from 'dot-object'
import Sort from './Sort'
import styles from './styles'

export default class Table extends React.Component {

  static propTypes = {
    items: React.PropTypes.array,
    fields: React.PropTypes.array.isRequired,
    onSelect: React.PropTypes.func.isRequired,
    sortBy: React.PropTypes.string,
    sortType: React.PropTypes.string,
    setSort: React.PropTypes.func.isRequired,
    selectedItemId: React.PropTypes.string
  }

  getSortProps (field) {
    const isActive = this.props.sortBy === field.name
    const isUp = this.props.sortType === 'ASC'
    return {
      isActiveUp: isActive && isUp,
      isActiveDown: isActive && !isUp
    }
  }

  toggleSort (field) {
    const isActive = this.props.sortBy === field.name
    const isUp = this.props.sortType === 'ASC'
    const type = isActive ? (isUp ? 'DESC' : 'ASC') : (typeof field.sort === 'string' ? field.sort : 'ASC')
    this.props.setSort(field.name, type)
  }

  renderHead () {
    const cols = this.props.fields.map(field => {
      const sort = field.sort ? <Sort {...this.getSortProps(field)} /> : null
      const style = field.sort ? styles.th + ' ' + styles.thSort : styles.th
      const onTouchTap = field.sort ? () => this.toggleSort(field) : undefined
      return (
        <th key={field.name} style={style} onTouchTap={onTouchTap}>
          {sort}
          {field.title}
        </th>
      )
    })
    return <tr>{cols}</tr>
  }

  renderValue (item, field, index) {
    const value = dot.pick(field.name, item)

    if (field.render) {
      try {
        return field.render(item, value, index)
      } catch (error) {
        console.error(`Error rendering field "${field.name}":`, error)
        return <span><i>Error</i></span>
      }
    }

    return value
  }

  renderBody () {
    return this.props.items.map((item, index) => {
      const isSelected = this.props.selectedItemId === item._id
      const cols = this.props.fields.map(field => {
        return (
          <td key={field.name}>
            {this.renderValue(item, field, index)}
          </td>
        )
      })
      return (
        <tr key={item._id} style={isSelected ? styles.selected : {cursor: 'pointer'}} onTouchTap={() => this.props.onSelect(item, index)}>
          {cols}
        </tr>
      )
    })
  }

  render () {
    return (
      <div style='table hoverable'>
        <table>
          <thead>
            {this.renderHead()}
          </thead>
          <tbody>
            {this.renderBody()}
          </tbody>
        </table>
      </div>
    )
  }

}
