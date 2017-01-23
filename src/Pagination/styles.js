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
      backgroundColor: '#eee',
      borderRadius: 5,
      height: 30,
      width: 40,
      fontSize: 16,
      border: 0,
      textAlign: 'center',
      outline: 'none'
    },
    iconButton: {
      display: 'inline-block',
      position: 'relative',
      top: -6,
      cursor: 'pointer',
      color: '#000'
    },
    iconButtonDisabled: {
      display: 'inline-block',
      position: 'relative',
      top: -6,
      color: '#ddd'
    },
    select: {
      position: 'relative',
      top: -2,
      fontFamily: 'inherit',
      backgroundColor: '#eee',
      outline: 'none'
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
