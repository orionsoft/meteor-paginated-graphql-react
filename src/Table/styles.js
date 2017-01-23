import reactCSS from 'reactcss'

export default reactCSS({
  'default': {
    container: {
      backgroundColor: '#eee',
      padding: 10,
      borderRadius: 5
    },
    th: {
      position: 'relative'
    },
    thSort: {
      cursor: 'pointer'
    },
    selected: {
      backgroundColor: '#cacaca',
      cursor: 'pointer'
    }
  }
})
