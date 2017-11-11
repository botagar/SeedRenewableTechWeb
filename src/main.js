import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'

import App from './app.jsx'

import './index.html'
import './assets/vendor/css/reset.css'

const appContainer = document.getElementById('app')

const render = () => {
  ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    appContainer
  )
}

if (module.hot) {
    module.hot.accept('./app.jsx', () => {
        render()
    })
}

render()
