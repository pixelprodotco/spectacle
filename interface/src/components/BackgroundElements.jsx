import React from 'react'
import styled from 'react-emotion'

export const Top = styled.div(({theme}) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  height: 50,
  width: '100%',
  background: 'white',
  borderBottom: `1px solid ${theme.borderColor}`
}))

export const Right = styled.div(({theme}) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  height: '100%',
  width: 25,
  background: 'white',
  borderLeft: `1px solid ${theme.borderColor}`
}))

export const Left = styled.div(({theme}) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: 25,
  background: 'white',
  borderRight: `1px solid ${theme.borderColor}`
}))

export const Bottom = styled.div(({theme}) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  height: 50,
  width: '100%',
  background: 'white',
  borderTop: `1px solid ${theme.borderColor}`
}))
