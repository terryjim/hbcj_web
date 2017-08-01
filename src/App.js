import React, { Component } from 'react'


import { connect } from 'react-redux'
import Main from './pages/Main'
import Login from './pages/Login'
class App extends Component {
  /* constructor(props) {
     super(props)
     this.state = {
       clearMsg: false
     }
     this.onShowModal = this.onShowModal.bind(this)
     this.handleClear = this.handleClear.bind(this)
     this.handleCancel = this.handleCancel.bind(this)
   }
   onShowModal = () => {
     this.setState({ clearMsg: true })
   }
   handleClear = () => {
     this.setState({ clearMsg: false })
     this.props.clearMessages()
   }
   handleCancel = () => {
     this.setState({ clearMsg: false })
   }*/
  render() {
    return (
      <div>
        <Login />
        <Main />
      </div>
    )
  }
  /*  else
      return (<div className="loading">
        <img src="./img/loading.gif" />
        <p>正在更新数据，请稍后（如长时间没反应，请刷新整个页面）...</p>
      </div>)
  }*/
}


export default App