import reactCSS from 'reactcss'

export default reactCSS({
  'default': {
    container: {
      position: 'absolute',
      right: 10,
      top: 20,
      display: 'flex',
      flexDirection: 'column'
    },
    arrowUp: {
      color: '#888',
      margin: -8,
      marginBottom: 0
    },
    arrowDown: {
      color: '#888',
      margin: -8
    },
    active: {
      color: '#000000'
    }
  }
})

/*
:local(.active) {
  color: #2196f3 !important;
}
*/
