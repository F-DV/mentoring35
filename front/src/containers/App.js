import React, { Component } from 'react'
import From from '../components/From'
import Result from '../components/Result'
import Dice from '../resorurces/lanzando.jpg'
class App extends Component {// component stateful
  render() {
    return (
      <div>
        <h3>Lanza el Dado</h3>
        <p>Prueba Suerte Con el Dado</p>
        
        <From />
        <Result />
      </div>
    )
  }
}

export default App


