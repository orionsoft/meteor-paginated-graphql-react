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
      marign: -8,
      color: '#888'
    },
    arrowDown: {
      margin: -8,
      color: '#888'
    }
  }
})

/*
:local(.active) {
  color: #2196f3 !important;
}
*/
