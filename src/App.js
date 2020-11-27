import React, { Component } from 'react'
import Addtask from './Components/Addtask'
import Header from './Components/Header'
import './Components/style.css'

class App extends Component {
  render() {
    return (
      <div className="todo-body">
        <Header />
        <Addtask />
      </div>
    )
  }
}

export default App

