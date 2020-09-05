import React from 'react'
import { Typography } from '@material-ui/core'
import styled from '@emotion/styled'
import { useTheme } from '@material-ui/core/styles'

const StyledNumber = styled(Typography)`
  ${({ theme }) => ({
    '&.MuiTypography-root': {
      fontSize: '8rem',
      fontWeight: '700',
    },
    color: theme.palette.primary.dark,
  })}
`

const BigNumber = props => {
  const theme = useTheme()
  return (
    <StyledNumber component="span" theme={theme}>
      {props.children}
    </StyledNumber>
  )
}

export default BigNumber
