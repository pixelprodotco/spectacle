import React from 'react'
import Logo from '../../svgs/Logo'
import styled from 'react-emotion'

const Container = styled.div(({theme}) => ({
  position: 'absolute',
  background: 'white',
  display: 'flex',
  alignItems: 'center',
  top: 10,
  left: 10,
  border: `1px solid ${theme.borderColor}`,
  padding: 15,
  borderRadius: 5,
  minWidth: 300,
  maxWidth: 400,
  ' > svg': {
    width: 121,
    height: 'auto'
  }
}))

class LogoBlock extends React.Component {
  render () {
    return (
      <Container>
        <Logo />
      </Container>
    )
  }
}

export default LogoBlock
