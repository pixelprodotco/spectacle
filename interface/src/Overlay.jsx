import React from 'react'
import styled from 'react-emotion'
import LogoBlock from './components/LogoBlock'
import { Top, Left, Right, Bottom } from './components/BackgroundElements'

const FullScreen = styled.div({
  position: 'relative',
  width: '100vw',
  height: '100vh'
})

const WebcamBlock = styled.div(({theme}) => ({
  width: 360,
  zIndex: 10,
  height: 230,
  border: `1px solid ${theme.borderColor}`,
  position: 'absolute',
  bottom: 10,
  right: 10,
  background: 'white'
}))

class Overlay extends React.Component {
  render () {
    return (
      <FullScreen>
        <Top />
        <Left />
        <LogoBlock />
        <WebcamBlock />
        <Right />
        <Bottom />
      </FullScreen>
    )
  }
}

export default Overlay
