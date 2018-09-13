import React from 'react'
import ReactDOM from 'react-dom'
import Overlay from './Overlay'
import theme from './styles/theme'
import {ThemeProvider} from 'emotion-theming'
import './styles/reset'

const App = () => 
  <ThemeProvider theme={theme}>
    <Overlay />
  </ThemeProvider>

ReactDOM.render(<App />, document.getElementById('host'))
