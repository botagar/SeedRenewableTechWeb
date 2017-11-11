import 'babel-polyfill'
import React, { Component, StyleSheet } from 'react'

import bgImg from './assets/images/sapling-desert.jpg'

const style = {
    backgroundImage: {
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh'
    }
}

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  componentWillMount() {
    
  }

  async componentDidMount() {
    
  }

  render() {
    return (
      <div style={style.backgroundImage}>
        <h1>Seed Renewable Tech</h1>
        <h2>Nurture the next generation of sustainable business</h2>
      </div>
    )
    
  }
}

export default App