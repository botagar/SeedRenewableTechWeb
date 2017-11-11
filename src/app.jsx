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
    },
    heading: {
        textAlign: 'center',
        padding: '25vh 0 0 0',
        fontSize: '6em'
    },
    subHeading: {
        textAlign: 'center',
        padding: '2vh 0 0 0',
        fontSize: '2em'
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
        <h1 style={style.heading}>Seed Renewable Tech</h1>
        <h2 style={style.subHeading}>Nurture the next generation of sustainable business</h2>
      </div>
    )
    
  }
}

export default App