import reactCSS from 'reactcss'

export default reactCSS({
  'default': {
    container: {
      display: 'flex',
      marginBottom: 20
    },
    left: {
      marginRight: 10,
      marginTop: 5
    },
    title: {
      fontSize: 30,
      fontWeight: '700'
    },
    center: {
      flex: 1,
      minHeight: 48
    },
    filter: {
      marginLeft: 10,
      textAlign: 'right',
      width: 300
    }
  }
})

/*
@media screen and (max-width: 800px) {
  :local(.container) {
    flex-direction: column;
  }

  :local(.left) {
    margin-right: 0;
  }

  :local(.filter) {
    margin-top: 30px;
    margin-left: 0;
    width: 100%;
  }
}
*/
