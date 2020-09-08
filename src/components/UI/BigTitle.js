import React from 'react'
import styled from '@emotion/styled'
import { Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

const StyledBigTitle = styled(Typography)`
  ${({ theme }) => `
  font-family: 'Roboto';
  font-size: 4.6rem;
  font-weight: 600;
  color: ${theme.palette.primary.dark};

  {${theme.breakpoints.up('md')}} {
    font-size: 4.8rem;
  }

  {${theme.breakpoints.up('lg')}} {
    font-size: 5rem;
  }
`}
`

const BigTitle = props => {
  const theme = useTheme()

  return (
    <StyledBigTitle variant="h3" theme={theme}>
      {props.children}
    </StyledBigTitle>
  )
}

export default BigTitle
