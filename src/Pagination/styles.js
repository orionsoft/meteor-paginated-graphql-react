import reactCSS from 'reactcss'

export default reactCSS({
  'default': {
    container: {
      display: 'flex',
      margin: '20px 10px -10px 10px'
    },
    pagesContainer: {
      flex: 1,
      textAlign: 'right'
    },
    pageInput: {
      backgroundColor: '#ddd',
      borderRadius: 5,
      height: 40
    }
  }
})

/*
:local(.pageInput) > div {
  padding: 0 10px !important;
}

:local(.pageInput) > input {
  padding: 0 10px !important;
  box-sizing: border-box;
}
*/

/*
@media screen and (max-width: 500px) {
  :local(.container) {
    flex-direction: column;
  }

  :local(.limitContainer) {
    text-align: center;
  }

  :local(.pagesContainer) {
    text-align: center;
  }
}
*/
