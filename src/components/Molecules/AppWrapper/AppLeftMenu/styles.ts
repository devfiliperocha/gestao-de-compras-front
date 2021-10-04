import styled from 'styled-components'
import Box from '@material-ui/core/Box'

export const Wrapper = styled(Box)`
  display: flex;
`

export const Container = styled(Box)`
  flex-grow: 1;
  height: 100vh;
  padding: 0;
  overflow-y: hidden;
  padding-top: 5.8rem;
`

export const ContainerChildren = styled(Box)`
  height: 90vh;
  overflow-y: auto;
  padding-top: 3rem;
  padding-bottom: 3rem;
`
